import { Photos } from "../models/Photo.js";

export const getHomePage = async (req, res) => {
    const photos = await Photos.find({});
    res.render("index", { photos });
};

export const getAboutPage = (req, res) => {
    res.render("about");
};

export const getAddPage = (req, res) => {
    res.render("add");
};