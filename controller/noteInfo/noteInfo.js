const notesDataInfo = require("../../models/noteDataModel");


const noteInfoData = async (req, res) => {
    try {
        const { content, listid } = req.body;
        const data = await notesDataInfo.create({
            content: content,
            listid: listid,
        })
        res.send(data);

        const response = await noteListInfo.findOneAndUpdate({ _id: listid }, { $push: { datas: data._id } });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while fetching data.' });
    }
}


module.exports = noteInfoData;
