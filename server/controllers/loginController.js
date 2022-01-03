const db = require('../models/model.js');

const loginController = {
  verifyUser(req, res, next){
    const msg = 'controller fired';
    res.locals.msg = msg;
    return next();
  }
};

module.exports = loginController;
