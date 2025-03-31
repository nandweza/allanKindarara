"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Serve static files from the "uploads" directory
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
dotenv_1.default.config();
// import cors from 'cors';
// import mongoose from 'mongoose';
// import authRoutes from './routes/authRoutes';
// import postRoutes from './routes/postRoutes';
// import projectRoutes from './routes/projectRoutes';
// import contactRoutes from './routes/contactRoutes';
// import userRoutes from './routes/userRoutes';
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use('/uploads', express_1.default.static('uploads'));
app.get('/', (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
//# sourceMappingURL=index.js.map