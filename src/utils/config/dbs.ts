import dotenv from 'dotenv';
dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

export const mongoDbstr = `mongodb+srv://${username}:${password}@cluster0.epdota9.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0`;
