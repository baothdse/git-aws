const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./configs/db')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dbConnection = mongoose.connection;

mongoose.connect(db.url);

app.get('/', function (req, res) {
  console.log('Current path /');
  res.sendFile('index.html', {root: '../assets'});
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

dbConnection.on('open', () => {
  console.log('Connect to database product')
})

app.listen(PORT, () => {
  console.log("server start on port " + PORT);
});

require('./app/router')(app);
exports = module.exports = app;