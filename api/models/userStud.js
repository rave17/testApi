const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    "name": {type: String, required: true},
    "lastname": {type: String, required: true},
    "email": {type: String, required: true},
    "password": {type: String, required: true},
    "hobbies":{type: [String], required: false},
    "dataUser": {
        "date": {type: Date, default: Date.now}
    }
});

module.exports = mongoose.model('Students', UserSchema);