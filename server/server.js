const express = require('express');
const path = require('path');

const app = express();
//require routers

//parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/test', (req, res) => {
  res.sendStatus(200);
})





// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error: Page not found'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
 app.listen(3000, () => {
  console.log(`Server listening on port: ${3000}...`);
});

module.exports = app;