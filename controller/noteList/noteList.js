const noteListInfo = require('../../models/noteListModel');


const noteListData = async (req, res) => {
    try {
        const { title, color_code, userid } = req.body;
        const data = await noteListInfo.create({
            title: title,
            color_code: color_code,
            userid: userid
        })
        res.status(200).send(data);

        const response = await signupInfo.findOneAndUpdate({ _id: userid }, { $push: { lists: data._id } });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while fetching data.' });
    }
}

module.exports = noteListData;   