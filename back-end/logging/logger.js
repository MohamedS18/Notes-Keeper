const fs = require("fs");
const path = require("path");
const moment = require("moment");

const logFilePath = path.join(__dirname, "logs.txt");

function logger (method, name){
    const logEntry = `[${moment().format("DD-MM-YYYY HH:mm:ss")}]  ${method} -user:${!name ? "Unknown" : name.substring(0,4)}\n`; 
    console.log(logEntry);
};

module.exports = { logger };
