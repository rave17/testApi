const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;

//db connection
require('./db/dbConnection');

app.use(morgan('dev'));


//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//router 
const authRoute = require('./routes/auth');
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

//routes auth
app.use('/auth-v1/api', authRoute);

//server connection
try {
    app.listen(PORT,
        console.log(`server running at port ${PORT}`));

} catch (err) {
    console.log(`not connected ${err}`)
};
