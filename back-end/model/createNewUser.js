const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function createNewUser(user, pass) {
  // await mongoose.connect("mongodb://localhost:27017/demo");
  const response = await Notes.insertOne({
    username: user,
    password: pass,
    notes: [
      {
        title: "Welcome",
        content: "Its your first Note",
        lastUpdated: new Date(),
      },
    ],
  });
  console.log(response);
}
