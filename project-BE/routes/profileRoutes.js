import { Router } from "express";
import { handleAuthController, handleGetUserDataController } from "../controllers/profileControllers.js";
const router = Router()

router.post('/:id',handleAuthController);
router.get('/:id', handleGetUserDataController)

export default router;