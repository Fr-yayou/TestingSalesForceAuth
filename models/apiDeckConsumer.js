const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apiDeckConsumerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    consumerId: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('apiDeckConsumer', apiDeckConsumerSchema)