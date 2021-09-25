import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started PORT: ' + process.env.PORT);
});