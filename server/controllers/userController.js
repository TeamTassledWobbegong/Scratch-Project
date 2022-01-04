const db = require('../models/model.js');

const userController = {
  async verifyUser(req, res, next){
    console.log('verifyUser fired');
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    res.locals.results = await db.query(query);
    //if query failed
    if(res.locals.results.rows.length < 1) return next({
      log: 'verifyUser middleware failed',
      message: {err: 'Did not find user '}
    });
    //check pw match
    if(res.locals.results.rows[0].password != password){ 
      return next({
        log: 'getCharacters middleware failed',
        message: {err: 'Did not find user'}}
      );} else{
      return next();
    }
  },

  async createUser(req, res, next){
    try{
      console.log('createUser fired');
      const { username, password } = req.body;
      const query = `INSERT INTO public.users(username, password) VALUES ('${username}', '${password}') RETURNING _id;`;
      res.locals.results = await db.query(query);
      //if query failed
      if(!res.locals.results){ return next({
        log: 'createUser middleware failed',
        message: {err: 'User already exists, did not create entry'}
      });}else{
        return next();
      }
    }catch(e){
      return next({
        log: 'createUser middleware failed: ', e,
        message: {err: 'User already exists, did not create entry'}
      });
    }
  },

  async getStock(req, res, next){
    try{
      console.log('getStock fired');
      const query = 'SELECT * FROM "public"."stock";';
      res.locals.results = await db.query(query);
      //if query failed
      if(!res.locals.results){ return next({
        log: 'getStock middleware failed',
        message: {err: 'Stock is empty, no results found'}
      });}else{
        return next();
      }
    }catch(e){
      return next({
        log: 'getStock middleware failed: ', e,
        message: {err: 'Stock is empty, no results found'}
      });
    }
  },

  async addItem(req, res, next){
    try{
      console.log('addItem fired');
      const { itemName, cartID, quantity } = req.body;
      const findQuery = `SELECT * FROM "public"."carts" WHERE cart_id = ${cartID};`;
      const insertQuery = `INSERT INTO public.carts(item_name, quantity, cart_id) VALUES ('${itemName}', '${cartID}', '${quantity}') RETURNING _quantity;`;
      res.locals.results = await db.query(findQuery);
      if(res.locals.)



      //if query failed
      if(!res.locals.results){ return next({
        log: 'addItem middleware failed',
        message: {err: 'Item or cart not found'}
      });}else{
        return next();
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
