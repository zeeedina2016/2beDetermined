const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medSchema = new Schema({
    Patient_ID: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Sex: {
        type: String,
        required: true
    },
    Zip: {
        type: Number,
        required: true
    },
    Latest_BMI: {
        type: Number,
        required: true
    },
    Latest_Weight: {
        type: Number,
        required: false
    },
    Png_Filename: {
        type: String,
        required: true
    },
    Exam_id: {
        type: String,
        required: true
    },
    ICU_Admit: {
        type: String,
        required: false
    },
    Num_ICU_admits: {
        type: Number,
        required: false
    },
    Mortality: {
        type: String,
        required: false
    },
    Key_Findings:{
        type: String,
        required: false
    },
    Brixa_Score:{
        type: String,
        required: false
    }
    
}, {timestamps: true})

module.exports = mongoose.model("XRay",medSchema)