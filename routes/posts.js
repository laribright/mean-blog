import express from "express";

import { getPosts, postPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(postPosts);

export default router;
