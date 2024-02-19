const express = require("express");


const route = express.Router();


const signupData = require("../../controller/signup/signup.js");

route.post('/', signupData);


module.exports = route;