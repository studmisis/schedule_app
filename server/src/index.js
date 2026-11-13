import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import db from '../db/models/index.js';
import apiAuthRouter from './routes/api/apiAuthRouter.js';
import apiAdminRouter from './routes/api/apiAdminRouter.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Discipline, User } = db;

app.use('/api/auth', apiAuthRouter);
app.use('/api/admin', apiAdminRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
