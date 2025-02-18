const mongoose = require("mongoose");

const note = new mongoose.Schema({
    title:String,
    content:String,
    lastUpdated:{
        type:Date,
        default:new Date(),
    },
})


const notesSchema = new mongoose.Schema({
    username:String,
    password:String,
    notes:[note]
});


module.exports =  {notesSchema} ;