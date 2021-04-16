const express = require("express");
const path = require("path");
const app = express();
const port = 5555;
var due_Date = new Date();
const db = require("./config/mongoose");
const TodoList = require("./models/todo_model_Schema");
const bodyParser = require("body-parser");
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  TodoList.find({}, function (err, todolist) {
    if (err) {
      console.log("Error in fetching contacts from db");
      return;
    }
    return res.render("views_index", {
      title: "TODO LIST",
      task_list: todolist,
    });
  });
});

app.post("/new-task", function (req, res) {
  TodoList.create(
    {
      task: req.body.task,
      date: req.body.date,
      category: req.body.category,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating new task");
        return;
      }
      console.log("***********", newTask);
      return res.redirect("back");
    }
  );
});

app.post("/delete-task", function (req, res) {
  var s = req.body;
  var k = Object.keys(req.body);

  for (let i = 0; i < k.length; i++) {
    TodoList.findByIdAndDelete(k[i], function (err) {
      if (err) {
        console.log(err);
      }
      console.log("deleted");
    });
  }
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Server is running on port ::",port);
});
