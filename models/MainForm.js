const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    date:{
        type: String, 
        required: true,
    }

})

module.exports = mongoose.model('mains', userSchema)