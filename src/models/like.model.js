import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({

    // Either of `video`, `comment`, or `tweet` will be assigned other two will be null
    video: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    },
    likedBty: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


export const Like = mongoose.model('Like', likeSchema);