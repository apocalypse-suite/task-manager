const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

// connecting mongoose models
const {List, Task} = require('./db/models');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Getting all the lists
app.get('/lists', (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  })
});

//Creating a new list
app.post('/lists', (req, res) => {
  let title = req.body.title;

  let newList = new List({
    title
  });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  });
});

//Updating a list (using id)
app.patch('/lists/:id', (req, res) => {
  List.findByIdAndUpdate({_id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  })
});

//Deleting the list with corresp. id
app.delete('/lists/:id', (req, res) => {
  List.findOneAndRemove({_id: req.params.id}).then((removedListDoc) => {
    res.send(removedListDoc);
  })
});

//Getting all tasks that belong to list with corresp. id
app.get('/lists/:listId/tasks', (req, res) => {
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks);
  });
});

//Getting ONE task with stated id in corresp. list
app.get('/lists/:listId/tasks/:taskId',(req,res)=>{
  task.findOne({
    _listId: req.params.listId,
    _taskId: req.params.taskId
  }).then((task)=>{
    res.send(task);
  });
});

//Creating new task
app.post('/lists/:listId/tasks', (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  })
});

//Updating task by id
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findByIdAndUpdate({
    _id: req.params.taskId,
    _listId: req.params.listId
  }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
});

//Deleting task by id
app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
