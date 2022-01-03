const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

// app.use('/signup', signupRouter);
// app.use('/products', productsRouter);

router.get('/test', (req, res) => {
  res.sendStatus(200);
});

router.get('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.results.rows[0]._id);
});

router.get('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.results.rows[0]._id);
});

module.exports = router;