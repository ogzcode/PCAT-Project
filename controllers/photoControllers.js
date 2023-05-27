import { Photos } from "../models/Photo.js";

export const addPhoto = async (req, res) => {
    await Photos.create({
        ...req.body,
        image: "/upload/" + req.file.originalname
    });    
};

export const getSinglePhoto = async (req, res) => {
    const photo = await Photos.findOne({ _id: req.params.id });
    res.render("photo", { photo });
};
