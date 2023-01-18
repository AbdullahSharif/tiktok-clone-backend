import express from "express";
import mongoose from "mongoose";
import videoRoutes from "./routes/VideoRoutes.js";
import cors from "cors";

// app config.
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeaders("Access-Control-Allow-Origin", "*");
    res.setHeaders("Access-Control-Allow-Headers", "*");
    next();
})

// DB config.
const connection_URI = "mongodb+srv://abdullah:abdullah@cluster0.hdwk488.mongodb.net/Tiktok?retryWrites=true&w=majority"
mongoose.connect(connection_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected to DB")).catch((err) => console.log("Error in connectig to DB", err))

// api endpoints.
app.get("/", (req, res) => res.status(200).send("Hello world!"))
app.use("/api/videos", videoRoutes);


// listeners.

app.listen(port, () => console.log(`Listening on localhost:${port}`));
