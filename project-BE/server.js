import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import credentialsRouter from "./routes/credentialsRoutes.js";  // Ensure .js extension for local file
import {connect} from "./database/database.js";  // Ensure .js extension for local file
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // Use default port if env variable is undefined

// Configure CORS
const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Use router
app.use('/credentials', credentialsRouter);

// Test route
app.get('/', (req, res) => {
    res.send('Get Request Successful');
});

// Start the server
app.listen(PORT, () => {
    connect();  // Connect to MongoDB
    console.log(`Server is running at port -> ${PORT}`);
});