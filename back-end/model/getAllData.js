const mongoose = require("mongoose");
const { notesSchema } = require("./notesSchema");

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function getAllData(req,res) {
  // try {

  //   const {username } = req.body;
  //   const data = await Notes.findOne({ username }, { notes: true });
  //   


  //   res.status(200).send(data.notes);
  // } catch (err) {
  //   console.log(err.message);
  // }

  try {
    const { username } = req.query; // Extract username from query params

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const data = await Notes.findOne({ username }, { notes: true });
    data.notes.sort((a, b) => b.lastUpdated - a.lastUpdated);
    // if (!data) {
    //   return res.status(404).json({ message: "No notes found" });
    // }

    res.status(200).json(data.notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { getAllData };
