import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, testAPI, getCurrentUser, updateAccountDetails, updateUserAvatar } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.fields([
    {
        name: "avatar",
        maxCount: 1
    },
]), registerUser)

router.route("/test-api").get(testAPI)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)


router.route("/get-current-user").get(verifyJWT, getCurrentUser)

router.route("/update-account-details").post(verifyJWT, updateAccountDetails)

router.route("/update-user-avatar").post(verifyJWT, upload.single("avatar"), updateUserAvatar)



export default router;