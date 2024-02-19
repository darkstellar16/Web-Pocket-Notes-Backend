const express = require("express");

const route = express.Router();

const signup = require("../routes/signup/signup.js");

const signin = require("../routes/signin/signin.js");


route.use('/signup', signup);
route.use('/signin', signin);

module.exports = route;