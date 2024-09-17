import mongoose from 'mongoose';
import { nanoid } from 'nanoid';  // Import nanoid correctly

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => nanoid(12)
    },
    fullName: String,
    email: String,
    password: String,  // Fixed typo here
});

export const Users = mongoose.model('Users', userSchema, 'users');


