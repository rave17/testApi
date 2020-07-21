const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const morgan = require('morgan');

require('./db/dbConnection');

app.use(morgan('dev'));

//router 
const authRoute = require('./routes/auth');
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

//routes auth
app.use('/auth-v1/api', authRoute);


app.listen(3000);