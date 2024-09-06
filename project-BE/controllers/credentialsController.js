import User from '../models/user.js';  // Ensure .js extension for local files

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
        const user = new User({ fullName, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
