const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todoListDB");

const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connnecting db:"));

// up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
