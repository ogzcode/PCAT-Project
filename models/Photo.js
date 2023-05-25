import mongoose, { mongo } from "mongoose"

const Shema = mongoose.Schema;

const PhotoShema = new Shema({
    title: String,
    description: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

export const Photos = mongoose.model("Photos", PhotoShema);

