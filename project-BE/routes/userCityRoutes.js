import { Router } from "express";
import { handleGetQuizContents, handlePostUserContents } from "../controllers/userCityControllers.js";
const router = Router();

router.get("/:id/:cityId", handleGetQuizContents);
router.post("/:id/:cityId", handlePostUserContents);
export default router;