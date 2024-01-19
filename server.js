import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8090;
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Successfully learnt Docker from hard work, today is good day" });
});
app.listen(PORT, () => {
    console.log('App is running on ${PORT}');
});
