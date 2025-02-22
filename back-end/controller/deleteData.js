const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");

const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function deleteData(req, res) {
  try {
    const { username, note_id } = req.body;

    const response = await Notes.updateOne(
      { username },
      { $pull: { notes: { _id: note_id } } }
    );
    res.status(200).send("success");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error");
  }
}

module.exports = { deleteData };
