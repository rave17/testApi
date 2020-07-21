const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=>console.log(`connected to mongo Atlas`))
    .catch(err=> console.log(`error connecting to mongo Atlas, check env config`, err));
