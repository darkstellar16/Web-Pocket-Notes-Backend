require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

let cors = require("cors")
app.use(cors());

const dataConnection = require("./config/db.js");
dataConnection();

const main = require("./routes/index.js");
app.use('/', main);

app.get('/', (req, res) => {
    res.send("Hello express.js");
})


const signupInfo = require("./models/userModel");
const noteListInfo = require('./models/noteListModel.js');
const notesDataInfo = require("./models/noteDataModel.js");


app.post("/create-note-list", async (req, res) => {
    const { title, color_code, userid } = req.body;

    const data = await noteListInfo.create({
        title: title,
        color_code: color_code,
        userid: userid
    })
    res.send(data);
    console.log(data);
    const response = await signupInfo.findOneAndUpdate({ _id: userid }, { $push: { lists: data._id } });
    console.log(response);
})


app.post("/create-note-data", async (req, res) => {
    const { content, listid } = req.body;
    const data = await notesDataInfo.create({
        content: content,
        listid: listid,
    })
    res.send(data);
    console.log(data);
    const response = await noteListInfo.findOneAndUpdate({ _id: listid }, { $push: { datas: data._id } });
    console.log(response);

})




app.get('/user-note-list', async (req, res) => {
    const { _id } = req.query;
    const data = await signupInfo.findOne({ _id: _id }).populate({
        path: "lists",
        populate: {
            path: "datas"
        }
    })
    res.send(data);
    console.log(data);
})




// const port = process.env.PORT || 9000;
const port = 9000;
console.log(port);
app.listen(port, () => {
    console.log("Server is up and running")
})



