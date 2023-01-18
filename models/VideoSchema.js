import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    message: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    }
});

const Video = mongoose.model("video", VideoSchema);
export default Video;