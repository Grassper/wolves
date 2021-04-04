const express = require("express");
const router = express.Router();

// importing models
const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

/* post routes*/

// getting all post
router.get("/post", async (req, res) => {
  try {
    const posts = await postModel.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

// getting single post
router.get("/post/:id", getPostById, (req, res) => {
  res.json(res.post);
});

// creating one
router.post("/post", async (req, res) => {
  const post = new postModel({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// updating one
router.patch("/post/:id", getPostById, async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.description != null) {
    res.post.description = req.body.description;
  }
  if (req.body.imageUrl != null) {
    res.post.imageUrl = req.body.imageUrl;
  }

  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// deleting one
router.delete("/post/:id", getPostById, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add comments to
router.post("/post/:id/comments", getPostById, async (req, res) => {
  const comment = {
    content: req.body.content,
  };
  try {
    res.post.comments = res.post.comments.concat(comment);
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get post by id
async function getPostById(req, res, next) {
  let post;
  try {
    post = await postModel.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.post = post;
  next();
}

module.exports = router;
