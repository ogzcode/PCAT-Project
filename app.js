import express from "express";
import ejs from "ejs";
import path from 'path';
import { fileURLToPath } from 'url';
import multer from "multer";

import { getHomePage, getAboutPage, getAddPage } from "./controllers/pageControllers.js";
import { addPhoto, getSinglePhoto } from "./controllers/photoControllers.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const upload = multer({
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
        destination: (req, file, cb) => {
            cb(null, "public/upload");
        }
    })
});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.send("Hello");
});

app.get("/", getHomePage);
app.get("/about", getAboutPage);
app.get("/add", getAddPage);

app.post("/photoAdd", upload.single("image"), addPhoto);
app.get("/photo/:id", getSinglePhoto);


app.listen(3000, () => {
    console.log("Sunucu başlatıldı : http://localhost:3000/");
});