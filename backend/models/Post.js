const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  location: {
    type: String,
    required: [true, "must provide location"],
  },
  likes: {
    type: Number,
    required: [true, "must have likes count"],
  },
  description: {
    type: String,
    required: [true, "must provide description"],
  },
  PostImage: {
    type: String,
    required: [true, "must provide image url"],
  },

  date: {
    type: Date,
    required: [true, "must provide post creation date"],
  },
  displayDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
