import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Sunucu başlatıldı : http://localhost:3000/");
});