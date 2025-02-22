const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const { getAllData } = require("./controller/getAllData");
const { connectDB } = require("./database/connectDB");

const { notesRoute } = require("./routes/notesRoute");

dotenv.config();

app.use(connectDB);
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/notes", notesRoute);
app.get("/", getAllData);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log("Server running on port " + PORT));
