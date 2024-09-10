import { Router } from "express";
import { handleAuthController } from "../controllers/authControllers.js";
const router = Router()

router.post('/:id',handleAuthController);

export default router;