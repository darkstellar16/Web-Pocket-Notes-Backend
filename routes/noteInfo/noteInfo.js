const express = require("express");


const route = express.Router();
const noteInfoData = require("../../controller/noteInfo/noteInfo.js");
route.post('/', noteInfoData);


module.exports = route;