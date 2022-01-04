const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

// app.use('/signup', signupRouter);
// app.use('/products', productsRouter);

router.get('/test', (req, res) => {
  res.sendStatus(200);
});

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.results.rows[0]._id);
});

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.results.rows[0]._id);
});

router.get('/products', userController.getStock, (req, res) => {
  res.status(200).json(res.locals.results.rows);
});

router.patch('/add', userController.addItem, (req, res) => {
  res.status(200).json(res.locals.updated);
});

module.exports = router;
