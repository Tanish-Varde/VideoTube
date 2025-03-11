import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,  // cloudinary URL
        required: true
    },
    videoFile: {
        type: String,  // cloudinary URL
        required: true
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    duration: {
        type: String,
        required: true
    }
}, { timestamps: true });


videoSchema.plugin(mongooseAggregatePaginate);


export const Video = mongoose.model('Video', videoSchema);