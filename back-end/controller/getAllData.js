const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function getAllData(req, res) {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(401).json({ message: "Username is required" });
    }
    const data = await Notes.findOne({ username }, { notes: true });
    data.notes.sort((a, b) => b.lastUpdated - a.lastUpdated);

    res.status(200).json(data.notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { getAllData };
