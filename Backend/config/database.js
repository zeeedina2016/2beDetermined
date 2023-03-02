const mongoose = require('mongoose');

const connectDatabasse = () => {
    mongoose.connect(process.env.MONG_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log('Connected to Mongo DB ')
        
    })
}

module.exports = connectDatabasse