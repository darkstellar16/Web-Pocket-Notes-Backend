const mongoose = require("mongoose");

const noteListSchema = new mongoose.Schema({
    title: String,
    color_code: String,
    userid: String,
    datas: [{ type: mongoose.Types.ObjectId, ref: "Data" }]
})

const noteListInfo = mongoose.model("List", noteListSchema);
module.exports = noteListInfo;