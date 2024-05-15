import mongoose, { Document, Schema } from 'mongoose';

// Define interface for User document
export interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
}

// Define the user schema
const userSchema = new Schema<UserDocument>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the user model

export  const User = mongoose.model<UserDocument>('User', userSchema);

