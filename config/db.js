require("dotenv").config();
import { connect } from "mongoose";


// const  mongo_url  = "mongodb+srv://shubham:shubh@cluster0.oraafuo.mongodb.net/?retryWrites=true&w=majority";

const MONGO_URL = process.env.MONGOURL;
const connection = async () => {

    try {
        connect(MONGO_URL, { useNewUrlParser: true })
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

export default connection;