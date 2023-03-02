const express = require('express');
const router = express.Router();

const {
  createRecord,
  getMedRecords,
  getThisRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/med-controller');

//get all records

router.get('/',getMedRecords)


// get a single record 

router.get('/:id', getThisRecord)

// add a record

router.post('/', createRecord)

//remove a record by ID 

router.delete('/:id', deleteRecord)

//Update a record by ID

router.patch('/:id', updateRecord)

module.exports = router;
