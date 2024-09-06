import { Router } from 'express';
import { handleCredentials } from '../controllers/credentialsController.js'; // Ensure .js extension

const router = Router();  // Create a new router instance

// Define routes
router.post("/", handleCredentials);

export default router;