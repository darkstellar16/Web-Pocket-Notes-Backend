const express = require("express");
const route = express.Router();



const signup = require("../routes/signup/signup.js");

const signin = require("../routes/signin/signin.js");

const createNoteList = require("../routes/noteList/noteList.js");

const createNoteData = require("../routes/noteInfo/noteInfo.js");

const userData = require("../routes/userData/userData.js");


route.use('/signup', signup);
route.use('/signin', signin);
route.use("/create-note-list", createNoteList);
route.use("/create-note-data", createNoteData);
route.use('/user-note-list', userData)




module.exports = route;