const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");

const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function insertData(req, res) {
  try {
    const { username, title, content,lastUpdated } = req.body;
    console.log("Yeah");
    console.log(req.body);
    const data = await Notes.updateOne(
      { username: username },
      { $push: { notes: { title, content , lastUpdated:new Date(lastUpdated)} } }
    );
    
    res.status(200).send({ success: true });
    

    // await data[0].notes.save();
  } catch (err) {
    console.log(err.message);
  }

  // console.log(data);
  // Notes.insertOne(title)
  // console.log("sso sad");
}

module.exports = { insertData };
