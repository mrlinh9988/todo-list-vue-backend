const mongoose = require('../config/connectDB');

let todoSchema = mongoose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  },
}, {
  collection: 'todo',
});


let TodoModel = mongoose.model("todo", todoSchema);
module.exports = TodoModel;
