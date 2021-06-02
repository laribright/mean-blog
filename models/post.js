import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: [true, "A Post must have a title"] },
  content: {
    type: String,
    required: [true, "A Post must have a title"],
    // minlength: 20,
    // maxlength: 2000,
  },
});

export default mongoose.model("Post", postSchema);
