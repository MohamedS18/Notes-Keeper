const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");

const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function isExist(user) {
  const data = await Notes.find({ username: user });
  // console.log(data);
  // console.log(data);

  return data.length === 0 ? false : true;
}

module.exports = { isExist };
