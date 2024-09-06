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

const User = mongoose.model('User', userSchema);

export default User;  // Use export default to export User
