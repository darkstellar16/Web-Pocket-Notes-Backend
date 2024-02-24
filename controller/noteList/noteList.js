const noteListInfo = require('../../models/noteListModel');
const signupInfo = require("../../models/userModel");

const noteListData = async (req, res) => {
    try {
        const { title, color_code, userid } = req.body;
        const result = await noteListInfo.create({
            title: title,
            color_code: color_code,
            userid: userid
        })
        res.status(200).json({ status: 200, message: "Note Group Added Succesfully", result });

        const response = await signupInfo.findOneAndUpdate({ _id: userid }, { $push: { lists: result?._id } });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while fetching data.' });
    }
}

module.exports = noteListData;   