require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/medrecords')
var indexRouter = require('../Backend/routes/index');
import path from "../../client/public/index.html";

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/medrecords', workoutRoutes)
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 