import {Users} from '../models/users.js';  // Ensure .js extension for local files
import { ResetPasswordStorage } from '../models/resetPasswordStorage.js';
import { UserQuizes } from '../models/userQuizes.js';
import {createJWT} from '../middleware/JWTActions.js'
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

//Create the transporter
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"longhai2511@gmail.com",
        pass:"evhgbqntwloqbcba"
    }
});

//Function to send the password reset email
const sendPasswordResetEmail = async (email, resetUrl) => {
    try{
        const mailOptions = {
            from: 'longhai2511@gmail.com', // sender address
            to: email, // user's email
            subject: 'Password Reset Request',
            html: `<p>You requested a password reset from VN Virtual Experience. 
                    Click <a href="${resetUrl}">here</a> to reset 
                    your password. This link will expire in 30 
                    minutes.</p>`
        };
        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent successfully');

    }catch(error){
        console.error('Error sending password reset email:', error);
    }
}

export const handleCredentials = async (req, res) => {
    const type = req.body.type;
    const data = req.body.data;

    if (type === 'login') {
        handleLogin(data, res);
    } else if (type === 'register') {
        handleRegister(data, res);
    } else if (type === 'forgot') {
        handleForgotPassword(data, res);
    }
};

const handleLogin = async (data, res) => {
    const { email, password } = data;
    try {
        const existingUser = await Users.findOne({ email });
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
        // Check if the user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Account already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new user
        const user = new Users({ fullName, email, password: hashedPassword });
        await user.save();

        // Create a UserQuizes document
        const userQuizes = new UserQuizes({
            _id:user._id.toString() + "TTR",
            userId: user._id.toString(), // Use user's _id as a string
            cityId: "TTR",
            userAnswers: [
                { questionName: "question0", questionAnswer: "" },
                { questionName: "question1", questionAnswer: "" },
                { questionName: "question2", questionAnswer: "" },
                { questionName: "question3", questionAnswer: "" }
            ],
            currentProgress: 0,
            currentQuestion: 0
        });

        // Save the UserQuizes document
        await userQuizes.save();

        res.status(200).json({ message: "User Created" });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const handleForgotPassword = async (data, res)=>{
    const {email} = data
    try{
        //1. Find user email
        const exisitingUser = await Users.findOne({email});
        if(!exisitingUser) return res.status(404).json({error:"User not found!"});

        const userId = exisitingUser._id;

        //1.5 Find if there is a token

        

        //2 .Generate a reset token
        const resetToken = Math.random().toString(36).slice(2)

        //3. Hash the reset token
        const salt = await bcrypt.genSalt(10);
        const hashedToken = await bcrypt.hash(resetToken, salt);

        //4. Save Token and Password Reset Expiration Time

        const exisitingStorage = await ResetPasswordStorage.findOne({_id:userId});
        if(exisitingStorage){
            exisitingStorage.passwordResetToken = hashedToken;
            exisitingStorage.passwordResetExpires = Date.now() + 30 * 60 * 1000;
            await exisitingStorage.save()
        }else{
            const resetPassStorage = new ResetPasswordStorage({_id:userId,
                passwordResetToken:hashedToken,
                passwordResetExpires: Date.now() + 30 * 60 * 1000
            });
            await resetPassStorage.save();    
        }
        

        //5. Create a reset password link
        const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}&userId=${userId}`;

        //6. Configure EmailJS Data

        await sendPasswordResetEmail(email, resetUrl);

        res.status(200).json({message: "Password Reset Link to Your Email"})
    }catch(error){
        console.error("Error sending reset password",error);
        res.status(500).json({error: "Failed to send password reset email"})
    }
}