import User from '../models/user.js';  // Ensure .js extension for local files
import mongoose from 'mongoose';
import bcrypt from "bcrypt";

export const handleCredentials = async (req, res) => {
    const type = req.body.type;
    const data = req.body.data;

    if (type === 'login') {
        handleLogin(data);
    } else if (type === 'register') {
        handleRegister(data, req, res);
    }
};

const handleLogin = (data) => {
    // Implement login logic here
};

const handleRegister = async (data, req, res) => {
    const { fullName, email, password } = data;

    try {

        const existingUser = await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"Account already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt)


        //Will do this after check if there is already an account
        const user = new User({ fullName, email, hashed });
        await user.save();
        res.status(200).json({message:"User Created"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
