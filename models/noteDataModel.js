const mongoose = require("mongoose");
const notesDataSchema = new mongoose.Schema({
    content: String,
    listid: String,
}, { timestamps: true })

const notesDataInfo = mongoose.model("Data", notesDataSchema);
module.exports = notesDataInfo