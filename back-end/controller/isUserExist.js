const {createNewUser} = require("../model/createNewUser");
const {isExist} = require("../model/isExist");


async function isUserExist (req,res){
    try{
        const credential =  req.body;

        const response = await isExist(credential.username);
        // console.log(response+"ok");
        // console.log(await credential);
        // res.send/("check dons");
        
        if (!response){
            await createNewUser(credential.username, credential.password);
        }
        res.send({status:true});
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({status:false});
    }
}
    
module.exports = {isUserExist}