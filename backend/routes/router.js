const router = require("express").Router();
const getPosts = require("../controllers/getPosts");
const addPosts = require("../controllers/addPosts");
const upload = require("../utils/multer");

router.route("/posts").get(getPosts).post(upload.single("image"), addPosts);

module.exports = router;
