const express = require('express');

const loginController = require('../controllers/loginController.js');

const router = express.Router();

router.get('/', loginController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.msg);
});

module.exports = router;
