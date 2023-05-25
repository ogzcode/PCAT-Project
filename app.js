import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';

import { getHomePage, getAboutPage, getAddPage } from "./controllers/pageControllers.js";
import { addPhoto, getSinglePhoto } from "./controllers/photoControllers.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect("mongodb://localhost/example", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("Hello");
});

app.get("/", getHomePage);
app.get("/about", getAboutPage);
app.get("/add", getAddPage);

app.post("/photoAdd", addPhoto);
app.get("/photo/:id", getSinglePhoto);


app.listen(3000, () => {
    console.log("Sunucu başlatıldı : http://localhost:3000/");
});