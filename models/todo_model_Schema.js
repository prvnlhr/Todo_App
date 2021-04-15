const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const todoList = mongoose.model("todoList", todoListSchema);

module.exports = todoList;
