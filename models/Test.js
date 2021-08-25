const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    name2: {
        type: String,
        required: true,
    },
    school:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    
    tel: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    date:{
        type: String, 
        required: true,
    }

})

module.exports = mongoose.model('tests', userSchema)