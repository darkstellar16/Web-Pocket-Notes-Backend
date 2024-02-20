const express = require("express");



const route = express.Router();
const signinData = require("../../controller/signin/signin.js");
route.post('/', signinData);


module.exports = route;