const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

//CRUD
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our chat APIs.. ");
});

const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`server running on port...: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error.message);
  });
