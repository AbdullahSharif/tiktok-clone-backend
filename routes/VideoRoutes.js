import express from "express";
import { getAllVideos, createNewVideo } from "../controllers/VideoController.js";

const router = express.Router();

router.get("/allvideos", getAllVideos);
router.post("/video/new", createNewVideo);

// export default router;
// module.exports = router;
export default router 