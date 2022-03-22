const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    required: true
  },
  priority: {
    color: { type: String },
    text: { type: String }
  },
  deadLine: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
