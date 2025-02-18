const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");
const { ObjectId } = require("mongodb");


const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function deleteData(req,res){
    try{
        const {username, note_id} = req.body;
        const response = await Notes.;
        console.log(response);

        res.status(200).send("success");
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("soort");
    }
   }

module.exports = {deleteData};