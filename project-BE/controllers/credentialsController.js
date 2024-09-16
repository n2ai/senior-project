import {User} from '../models/user.js';  // Ensure .js extension for local files
import { UserCities } from '../models/userCities.js';
import mongoose from 'mongoose';
import {createJWT} from '../middleware/JWTActions.js'
import bcrypt from "bcrypt";

export const handleCredentials = async (req, res) => {
    const type = req.body.type;
    const data = req.body.data;

    if (type === 'login') {
        handleLogin(data, res);
    } else if (type === 'register') {
        handleRegister(data, res);
    }
};

const handleLogin = async (data, res) => {
    const { email, password } = data;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Account does not exist" });
        }

        // Use await here
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const payload = {
            email: existingUser.email,
            _id: existingUser._id,
            expiresIn: process.env.JWT_EXPIRES_IN
        };

        const token = createJWT(payload);

        const data = {
            _id:existingUser._id,
            accessToken:token
        }

        // Include the token in the response
        res.status(200).json({ message: "Login Successful", data:data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const handleRegister = async (data, res) => {
    const { fullName, email, password } = data;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Account already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Make sure you pass `password` with the hashed value
        const user = new User({ fullName, email, password: hashedPassword });
        await user.save();

        const userCities = new UserCities({_id:user._id, cityId:"TTR",finishedQuiz:[], finished:false})
        await userCities.save()
        res.status(200).json({ message: "User Created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};