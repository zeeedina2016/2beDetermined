const mongoose = require('mongoose')
let med = require('../models/med');

// create a new med record

const createRecord = async(req,res)=>{
  const{
    Patient_ID,
    Age,
    Sex,
    Zip,
    Latest_BMI,
    Latest_Weight,
    Png_Filename,
    Exam_id,
    ICU_Admit,
    Num_ICU_admits,
    Mortality,
    Key_Findings,
    Brixa_Score

  } = req.body
  try{
    const mrecord = await med.create({
      Patient_ID,
      Age,
      Sex,
      Zip,
      Latest_BMI,
      Latest_Weight,
      Png_Filename,
      Exam_id,
      ICU_Admit,
      Num_ICU_admits,
      Mortality,
      Key_Findings,
      Brixa_Score
    })
    res.status(200).json(mrecord)
  } catch(error){
    res.status(400).json({error: error.message})
  }
}
//get a single medrecord

const getThisRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such record'})
  }

  const record = await med.findById(id)

  if (!record) {
    return res.status(404).json({error: 'No such record'})
  }

  res.status(200).json(record)
}

//delete a med record
const deleteRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such record'})
  }

  const record = await med.findOneAndDelete({_id: id})

  if(!record) {
    return res.status(400).json({error: 'No such record'})
  }

  res.status(200).json(record)
}


// update a med record
const updateRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such record'})
  }

  const record = await med.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!record) {
    return res.status(400).json({error: 'No such record'})
  }

  res.status(200).json(record)
}


//get all medrecords
const getMedRecords = async (req, res) => {
  const medrecords = await med.find({}).sort({createdAt: -1})

  res.status(200).json(medrecords)
}
  
module.exports = {
    createRecord,
    getMedRecords,
    getThisRecord,
    updateRecord,
    deleteRecord
}