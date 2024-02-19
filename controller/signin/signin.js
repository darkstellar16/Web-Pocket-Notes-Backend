require("dotenv").config();

const signupInfo = require("../../models/userModel.js");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const signinData = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(404).send("Fields are required");
        }
        const user = await signupInfo.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {

            const token = jwt.sign({ email, password }, process.env.SECRET_KEY, { expiresIn: "4h" })
            user.token = token;

            return res.status(200).json({ user });
        }
        else {
            res.status(400).send("invalid credentials")
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = signinData;