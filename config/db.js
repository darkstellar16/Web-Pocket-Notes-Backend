require("dotenv").config();
const mongoose = require("mongoose");


// const  mongo_url  = "mongodb+srv://admin:admin@cluster0.krfvfqt.mongodb.net/?retryWrites=true&w=majority";

const MONGO_URL = process.env.MONGOURL;
const connection = async () => {
    try {
        mongoose.connect(MONGO_URL, { useNewUrlParser: true })
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;