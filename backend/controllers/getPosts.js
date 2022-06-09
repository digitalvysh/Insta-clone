const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ date: -1 });
    res.status(200).json({ allPosts });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = getPosts;
