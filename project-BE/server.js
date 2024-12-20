import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import credentialsRouter from "./routes/credentialsRoutes.js";  // Ensure .js extension for local file
import profileRouter from "./routes/profileRoutes.js";
import userCityRouter from "./routes/userCityRoutes.js";
import resetPasswordRouter from "./routes/resetPassword.js";
import { connect } from "./database/database.js";  // Ensure .js extension for local file
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // Use default port if env variable is undefined

const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

// Middleware
app.use(cors(corsOptions));  // Apply cors options
app.use(cookieParser());  // Corrected cookieParser usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routers
app.use('/credentials', credentialsRouter);
app.use('/profile', profileRouter);
app.use('/userCity', userCityRouter);
app.use('/reset-password', resetPasswordRouter);

// Test route
app.get('/', (req, res) => {
    res.send('Get Request Successful');
});

// Start the server
app.listen(PORT, () => {
    connect();  // Connect to MongoDB
    console.log(`Server is running at port -> ${PORT}`);
});
