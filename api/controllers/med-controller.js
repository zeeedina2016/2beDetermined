//const medRecord = require('../models/med')
//const mongoose = require('mongoose')

const getMedRecords = async(req,res) => {
    return res.status(200).json({
      success: true,
      message: 'Med Records working'
    });
  }
  
module.exports = {
    getMedRecords
}