import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      length: posts.length,
      success: true,
      posts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postPosts = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    const newPost = await post.save();

    res.status(201).json({
      success: true,
      message: "post creation successful",
      post: newPost,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id

    await Post.findByIdAndDelete(id)
  
    res.status(200).json({
      status: true,
      message: "Post deleted successfully"
    })
  } catch (error) {
    console.log(error)
  }
}
