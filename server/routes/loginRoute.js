const express = require('express');

const loginController = require('../controllers/loginController.js');

const router = express.Router();

router.get('/', loginController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.results.rows[0]);
});

module.exports = router;
