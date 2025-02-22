const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const { getAllData } = require("./controller/getAllData");
const { connectDB } = require("./database/connectDB");
const { notesRoute } = require("./routes/notesRoute");

dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB(); 

app.get("/", (req,res)=>{
    res.status(200).json({status:"Successful"});
});

app.use("/notes", notesRoute);

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;