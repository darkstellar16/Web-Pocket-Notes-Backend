const signupInfo = require("../../models/userModel");


const userData = async (req, res) => {
    try {
        const { _id } = req?.query;
        // console.log(req.query);

        const result = await signupInfo.findOne({ _id: _id }).populate({
            path: "lists",
            populate: {
                path: "datas"
            }
        })
        res.status(200).json({ status: 200, message: "Data fetched successfully", result });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}


module.exports = userData;