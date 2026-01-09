import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  url: {
    type: String, // URL to the media file
    required: true,
  },
  type: {
    type: String,
    enum: ["image", "video"],
    default: "image",
  },
  description: {
    type: String, // optional description for the media
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Media = mongoose.model("Media", mediaSchema);
