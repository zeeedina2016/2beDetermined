const medRecord = require('../models/med')
const mongoose = require('mongoose')

const getMedRecords = async(req,res) => {
    const medRecords = await medRecord.find({}).sort({createdAt: -1})
    res.status(200).json(medRecords)
}