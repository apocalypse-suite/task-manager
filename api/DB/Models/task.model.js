const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _listId:{
    type: mongoose.Types.ObjectId,
    required: true
  },
  completed:{
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = { Task }
