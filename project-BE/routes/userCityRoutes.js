import { Router } from "express";
import { handleGetQuizContents } from "../controllers/userCityControllers.js";
const router = Router();

router.get("/:id/:cityId", handleGetQuizContents);

export default router;