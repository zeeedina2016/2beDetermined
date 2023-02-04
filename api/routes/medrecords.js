const express = require('express');
const router = express.Router();
let med = require('../models/med')
const medController = require('../controllers/med-controller');

//router.get('/', medController.getMedRecords);

router.route('/').get((req,res) =>{
med.find({})
  .then(medrecords => res.json(medrecords))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;
