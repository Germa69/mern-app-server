import { Post } from '../models/Post.js';

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (message) {
    res.status(500).json({ error: message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new Post(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (message) {
    res.status(500).json({ error: message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await Post.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    res.status(200).json(post);
  } catch (message) {
    res.status(500).json({ error: message });
  }
};

export { getPosts, createPost, updatePost };

