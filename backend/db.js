require('dotenv').config();
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

//connect to mongo url
mongoose.connect(DB_URI);
// mongoose.connect('mongodb+srv://ekanshadmin:Yio947clsEJcHAqc@cluster0.qjptc24.mongodb.net/paytm_basic');

//make schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         minLength: 3,
//         maxLength: 30
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// });

//form a collection/table of that schema
const Users = mongoose.model('Users', userSchema);

//export collection
module.exports = Users;