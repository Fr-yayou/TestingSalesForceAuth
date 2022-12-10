const mongoose = require('mongoose')

const Schema = mongoose.Schema

const salesForceSchema = new Schema({
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    },
    instance_url: {
        type: String,
        required: true
    },
    token_type: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('salesForce', salesForceSchema)
