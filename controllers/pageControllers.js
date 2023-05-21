export const getHomePage = (req, res) => {
    res.render("index");
};

export const getAboutPage = (req, res) => {
    res.render("about");
};

export const getAddPage = (req, res) => {
    res.render("add");
};

export const getPhotoPage = (req, res) => {
    res.render("photo");
};