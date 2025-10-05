import express, {} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from './app.js';
import cors from 'cors';
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_URI || 'mongodb://localhost:27017/mydb';
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server is running');
});
mongoose
    .connect(MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
    .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});
//# sourceMappingURL=server.js.map