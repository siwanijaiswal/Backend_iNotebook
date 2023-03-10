const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo Connected Successfully')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectToMongo;

    
