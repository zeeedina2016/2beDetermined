const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medSchema = new Schema({
    0: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model("XRay",medSchema)