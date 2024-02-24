const notesDataInfo = require("../../models/noteDataModel");
const noteListInfo = require("../../models/noteListModel");

const noteInfoData = async (req, res) => {
    try {
        const { content, listid } = req.body;
        const result = await notesDataInfo.create({
            content: content,
            listid: listid,
        })
        res.status(200).json({ status: 200, message: "Note Added Succesfully", result });

        const response = await noteListInfo.findOneAndUpdate({ _id: listid }, { $push: { datas: result._id } });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while fetching data.' });
    }
}


module.exports = noteInfoData;
