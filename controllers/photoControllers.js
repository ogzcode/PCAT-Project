import { Photos } from "../models/Photo.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const addPhoto = async (req, res) => {
    await Photos.create({
        ...req.body,
        image: "/upload/" + req.file.originalname
    });
    res.redirect("/")
};

export const getSinglePhoto = async (req, res) => {
    const photo = await Photos.findOne({ _id: req.params.id });
    res.render("photo", { photo });
};

export const deletePhoto = async (req, res) => {
    const photo = await Photos.findOne({ _id: req.params.id });
    const deletedImage = __dirname + "/public" + photo.image;

    if (deletedImage && (await Photos.find({ image: photo.image })).length === 1) {
        fs.unlinkSync(deletedImage);
    }
    
    await Photos.findByIdAndRemove(req.params.id);

    res.redirect("/");
};

export const editPhoto = async (req, res) => {
    const photo = await Photos.findOne({ _id: req.params.id });

    photo.title = req.body.title;
    photo.description = req.body.description;
    photo.save();

    res.redirect(`/photo/${req.params.id}`);
};