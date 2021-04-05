const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
});

module.exports = mongoose.model("post", postSchema);
