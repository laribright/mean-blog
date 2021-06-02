import express from "express";

import { getPosts, postPosts, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(postPosts);

router.route("/:id").delete(deletePost)

export default router;
