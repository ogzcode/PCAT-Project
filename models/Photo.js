import mongoose from "mongoose"

const Shema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/pcat", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connect"))
.catch(e => console.log(e));

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