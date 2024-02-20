const express = require("express");


const route = express.Router();
const userData = require("../../controller/userData/userData.js");
route.get('/', userData);


module.exports = route;