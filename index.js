import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import FileUpload from "express-fileupload";
import ViewRoute from "./routes/ViewRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ViewRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("Server upp and running on port " + process.env.APP_PORT);
});