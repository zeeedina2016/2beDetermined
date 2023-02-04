const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medSchema = new Schema({
    patient_id: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    bmi: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    png_filename: {
        type: String,
        required: true
    },
    exam_id: {
        type: String,
        required: true
    },
    ICU_Admit: {
        type: String,
        required: true
    },
    number_of_icu_admits: {
        type: String,
        required: true
    },
    mortality: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("medRecord",medSchema)