const express = require("express");


const route = express.Router();
const noteListData = require("../../controller/noteList/noteList.js");
route.post('/', noteListData);


module.exports = route;