const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: "true",
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("post", postSchema);
module.exports = Post;
