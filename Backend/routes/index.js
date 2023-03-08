var express = require('express');
var router = express.Router();
import path from "../../client/public/index.html";

// express app
const app = express()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});


module.exports = router;