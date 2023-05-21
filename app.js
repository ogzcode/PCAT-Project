import express from "express";
import ejs from "ejs";

import { getHomePage, getAboutPage, getAddPage, getPhotoPage } from "./controllers/pageControllers.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/test", (req, res) => {
    res.send("Hello");
});

app.get("/", getHomePage);
app.get("/about", getAboutPage);
app.get("/add", getAddPage);
app.get("/video-page", getPhotoPage);

app.listen(3000, () => {
    console.log("Sunucu başlatıldı : http://localhost:3000/");
});