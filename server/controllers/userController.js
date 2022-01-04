const db = require('../models/model.js');

const userController = {
  async verifyUser(req, res, next) { //check if login is correct
    console.log('verifyUser fired');
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    res.locals.results = await db.query(query);
    //if query failed
    if (res.locals.results.rows.length < 1)
      return next({
        log: 'verifyUser middleware failed',
        message: { err: 'Did not find user ' },
      });
    //check pw match
    if (res.locals.results.rows[0].password != password) {
      return next({
        log: 'getCharacters middleware failed',
        message: { err: 'Did not find user' },
      });
    } else {
      return next();
    }
  },

  async createUser(req, res, next) { //create new user in db
    try {
      console.log('createUser fired');
      const { username, password } = req.body;
      const query = `
        INSERT INTO public.users(username, password) 
        VALUES ('${username}', '${password}') 
        RETURNING _id;`;
      res.locals.results = await db.query(query);
      //if query failed
      if (!res.locals.results) {
        return next({
          log: 'createUser middleware failed',
          message: { err: 'User already exists, did not create entry' },
        });
      } else {
        return next();
      }
    } catch (e) {
      return next({
        log: 'createUser middleware failed: ',
        e,
        message: { err: 'User already exists, did not create entry' },
      });
    }
  },

  async getStock(req, res, next) { //retrieve entire list of stock
    try {
      console.log('getStock fired');
      const query = 'SELECT * FROM "public"."stock";';
      res.locals.results = await db.query(query);
      //if query failed
      if (!res.locals.results) {
        return next({
          log: 'getStock middleware failed',
          message: { err: 'Stock is empty, no results found' },
        });
      } else {
        return next();
      }
    } catch (e) {
      return next({
        log: 'getStock middleware failed: ',
        e,
        message: { err: 'Stock is empty, no results found' },
      });
    }
  },

  async addItem(req, res, next){ //Add new item to cart or increase quantity if already present
    try{
      console.log('addItem fired');
      const { itemName, cartID, quantity } = req.body;
      const findQuery = `
        SELECT * 
        FROM "public"."carts" 
        WHERE cart_id = ${cartID};`;
      const insertQuery = `
        INSERT INTO public.carts(item_name, quantity, cart_id) 
        VALUES ('${itemName}', '${cartID}', '${quantity}') 
        RETURNING quantity;`;
      res.locals.results = await db.query(findQuery);
      //if not already in cart, create new entry
      if(res.locals.results.rows.length == 0){
        res.locals.amount = await db.query(insertQuery);
        return next();
      }else if(res.locals.results.rows.length > 0){ //if already in cart
        const arr = res.locals.results.rows;
        let newAmount;
        //find item quantity already in cart
        for (let i = 0; i < arr.length; i++) {
          const curr = arr[i];
          if(curr.item_name == itemName){
            newAmount = parseInt(curr.quantity) + parseInt(quantity);
          }
        }
        res.locals.updated = await db.query(
          `UPDATE carts
          SET quantity = '${newAmount}'
          WHERE cart_id = '${cartID}' AND item_name = '${itemName}'
          RETURNING quantity;`
        );
      }else{//if query failed
        return next({
          log: 'addItem middleware failed',
          message: { err: 'Item or cart not found' },
        });
      }
    }catch(e){
      return next({
        log: 'addItem middleware failed: ', e,
        message: {err: 'Item or cart not found'}
      });
    }
  }
};

module.exports = userController;
