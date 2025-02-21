const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");
const bcrypt = require("bcryptjs");


const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);


async function login (req,res){
    try{
        const {username, password} =  req.body;

        const data = await Notes.findOne({ username });
        // console.log(data)
       
        if (data.length === 0 ){            
            res.status(400).send({status:false});
        } else {
            const isMatch = await bcrypt.compare(password, data.password);
            if (isMatch){
                res.status(200).send({status:true});
            } else {
                res.status(400).send({status:false});
            }
            
        }
        
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({status:false});
    }
}
    
module.exports = {login}