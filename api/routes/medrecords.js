const express = require('express');
const router = express.Router();
let med = require('../models/med')
const medController = require('../controllers/med-controller');

//get all records

router.route('/').get((req,res) =>{
med.find({})
  .then(medrecords => res.json(medrecords))
  .catch(err => res.status(400).json('Error: ' + err))
})

// add a record

router.post('/', async (req,res) => {
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
    Mortality

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
      Mortality
    })
    res.status(200).json(mrecord)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})

module.exports = router;
