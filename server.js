const express = require("express");
const mongoose = require("mongoose");

// Initialize app
const app = express();
app.use(express.json());

// Load config
require("dotenv").config();
const { URI, PORT } = process.env;

// Routes
app.use("/api/shoppingList", require("./routes/shoppingList"));

if (URI)
  mongoose
    .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(console.log("MongoDB connected successfully"))
    .catch(err => console.log("Error: " + err));

if (PORT) app.listen(PORT, console.log("App listening on port " + PORT));
