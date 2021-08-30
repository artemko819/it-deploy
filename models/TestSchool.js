const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    school:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('testSchools', userSchema)