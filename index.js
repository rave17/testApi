const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MongoClient = require("mongodb").MongoClient;
const morgan = require('morgan');

dotenv.config();

app.use(morgan('dev'))

//router 
const authRoute = require('./routes/auth');
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

//routes auth
app.use('/auth-v1/api', authRoute);

mongoose.connect(
    process.env.DB_URL,
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=>console.log(`connected to ${process.env.DB_URL}`))
    .catch(err=> console.log(`error connecting to ${process.env.DB_URL}`, err));

    app.listen(3000);