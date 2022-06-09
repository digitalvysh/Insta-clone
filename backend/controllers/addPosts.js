const Post = require("../models/Post");
const cloudinary = require("../utils/cloudinary");
const addPosts = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const PostImage = result.secure_url;
    const { redirectURL } = req.body;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const { author, location, description } = req.body;
    const today = new Date();
    const date = `${today.getDate()} ${
      monthNames[today.getMonth()]
    } ${today.getFullYear()}`;
    const newPostData = {
      name: author,
      location: location,
      description: description,
      PostImage: PostImage,
      date: today,
      displayDate: date,
      likes: 0,
    };
    const createdPost = await Post.create(newPostData);
    res.status(301).redirect(redirectURL);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = addPosts;
