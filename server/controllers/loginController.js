const db = require('../models/model.js');

const loginController = {
  async verifyUser(req, res, next){
    const { username, password } = req.body;
    const query = `SELECT * FROM stock WHERE name = ${username}`;
    res.locals.results = await db.query(query);
    //if query failed
    if(!res.locals.results) return next({
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
  }
};

module.exports = loginController;
