const db = require('../models/model.js');

const loginController = {
  async verifyUser(req, res, next){
    console.log('verifyUser fired');
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}'`;
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
