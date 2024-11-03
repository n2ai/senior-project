import { Router } from "express";
import { handleVerifyToken, handleUpdatePassword } from "../controllers/resetPasswordController.js";

const router = Router();

router.post("/verifyToken", handleVerifyToken);
router.post("/updatePassword", handleUpdatePassword);
export default router;