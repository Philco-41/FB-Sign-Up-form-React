const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRoute = require("./routes/form-route");
require("dotenv").config();

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("data is done");
});

app.use(formRoute);
app.listen(port, (req, res) => {
  console.log("server is on");
});
