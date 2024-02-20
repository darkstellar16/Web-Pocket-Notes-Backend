const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    token: {
        type: String
    },
    lists: [{
        type: mongoose.Types.ObjectId, ref: "List"
    }]
})


const signupInfo = mongoose.model("Signup", signupSchema);
module.exports = signupInfo;