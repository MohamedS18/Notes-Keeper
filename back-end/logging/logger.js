const moment = require("moment");


function logger (method, name){
    const logEntry = `[${moment().format("DD-MM-YYYY HH:mm:ss")}]  ${method} -user:${!name ? "Unknown" : name.substring(0,4)}\n`; 
    console.log(logEntry);
};

module.exports = { logger };
