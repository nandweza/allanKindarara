import dotenv from 'dotenv';
import express from 'express';
// import path from 'path';

const app = express();

// Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

dotenv.config();

// import cors from 'cors';
// import mongoose from 'mongoose';


// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// app.use('/uploads', express.static('uploads'));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

export default app;
