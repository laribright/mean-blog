const posts = [
  {
    _id: Math.random(),
    title: "My first post",
    content: "I really love programming",
  },
  {
    _id: Math.random(),
    title: "My second post",
    content: "I really love footballing",
  },
  {
    _id: Math.random(),
    title: "My first post",
    content: "I really love God",
  },
];

export const getPosts = (req, res) => {
  res.status(200).json({
    length: posts.length,
    success: true,
    posts,
  });
};
