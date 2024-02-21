const signupInfo = require("../../models/userModel.js");

const bcrypt = require("bcrypt");

const signupData = async (req, res) => {

    try {
        const { email, password, username } = req.body;

        if (!(email && password)) {
            return res.status(400).json({ status: 400, message: "Please Input the mentioned details" });   //Asking for details
        }

        const oldUser = await signupInfo.findOne({ email });

        if (oldUser) {
            return res.status(409).json({ status: 409, message: "Please login, you are already registered" });
            //checking whether the user is already present or not..
        }

        const encryptedPasword = await bcrypt.hash(password, 10);

        const register = await signupInfo.create({
            username: username,
            email: email,
            password: encryptedPasword
        })
        res.status(200).json({ status: 200, message: "User has registered successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}

module.exports = signupData;