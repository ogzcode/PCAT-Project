import { Photos } from "../models/Photo.js";

export const getHomePage = async (req, res) => {
    const page = req.query.page || 1;
    const photosPerPage = 4;

    const totalPhoto = await Photos.find({}).countDocuments();

    const photos = await Photos.find({})
        .skip((page - 1) * photosPerPage)
        .limit(photosPerPage);

    res.render("index", { photos: photos, current: page, pages: Math.ceil(totalPhoto / photosPerPage) });
    /* const photos = await Photos.find({});
    res.render("index", { photos }); */
};

export const getAboutPage = (req, res) => {
    res.render("about");
};

export const getAddPage = (req, res) => {
    res.render("add");
};

export const getEditPage = async (req, res) => {
    const photo = await Photos.findOne({ _id: req.params.id });
    res.render("edit", { photo });
}