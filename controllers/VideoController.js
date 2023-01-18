import Video from "../models/VideoSchema.js";
export async function getAllVideos(req, res) {
    try {
        const result = await Video.find();
        if (!result) {
            result.status(500).json({ success: false });
            throw new Error("No records found!");
        }
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (ex) {
        console.log(ex.message);

    }
}



export async function createNewVideo(req, res) {

    const newVideo = await new Video(req.body);
    try {
        const result = await newVideo.save();
        return res.status(201).json({
            success: true,
            data: result
        });
    } catch (ex) {
        res.status(500).json({
            success: false
        });
        console.log(ex)

    }

}