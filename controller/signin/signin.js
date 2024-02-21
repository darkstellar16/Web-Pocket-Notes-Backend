require("dotenv").config();

const signupInfo = require("../../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signinData = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(404).json({ status: 404, message: "Fields are required" });
        }

        const user = await signupInfo.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ email, password }, process.env.SECRET_KEY, { expiresIn: "4h" });
            user.token = token;

            return res.status(200).json({ status: 200, message: "Login successful", user });
        } else {
            res.status(400).json({ status: 400, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}

module.exports = signinData;
