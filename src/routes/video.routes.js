import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";
import {
    getVideoById,
    publishVideo,
    deleteVideo,
    updateVideo,
    togglePublishStatus,
    getAllvideos,
} from "../controllers/video.controller.js"

const router = Router()

router.route("/").get(getAllvideos).post(verifyJWT, upload.fields(
    [
        {
            name: "videofile",
            maxCount: 1
        },
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]
    ), 
    publishVideo
)

router
    .route("/v/videoId")
    .get(verifyJWT, getVideoById)
    .delete(verifyJWT, deleteVideo)
    .patch(verifyJWT, upload.single("thumbnail"), updateVideo)

router.route("/toggle/publish/:videoId").patch(verifyJWT, togglePublishStatus)

export default router;