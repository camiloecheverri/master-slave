const express = require('express');
const app = express()
const bodyparser= require('body-parser');
const port = process.env.PORT || 5000
app.set('port',port);
app.use(bodyparser.urlencoded({
  extended: true
}));
//routes
const routeUser = require('./routes/user');
app.use('/',routeUser);
module.exports = app;
