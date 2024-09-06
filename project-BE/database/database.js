import mongoose from 'mongoose';  // Use import instead of require

export async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongoose connection successful');
        return connection;
    } catch (error) {
        console.error('Connection error:', error);
        if (error.code === 8000) {
            throw new Error('Cannot connect to MongoDB');
        }
    }
}
