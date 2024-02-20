const signupInfo = require("../../models/userModel");


const userData = async (req, res) => {
    try {
        const { _id } = req.query;
        const data = await signupInfo.findOne({ _id: _id }).populate({
            path: "lists",
            populate: {
                path: "datas"
            }
        })
        res.status(200).send(data);

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while fetching data.' });
    }
}


module.exports = userData;