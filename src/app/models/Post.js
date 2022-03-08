import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: "Anonymous" },
    attachment: String,
    likeCount: {  type: Number, default: 0 },
  },
  { 
    timestamps: true 
  }
);

export const Post = mongoose.model("Post", PostSchema);
