import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';

import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from './controllers/user.controllers.js';

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors()); //allow origin selectively? (should be external url of hosted front-end)

// Starting server
const startServer = () =>
  app.listen(PORT, () => console.log('Staring server on port: ' + PORT));

// Database
connectDatabase(startServer);

// Routes
app.get('/api/users', getUsers);

app.get('/api/users/:id', getUser);

app.post('/api/users', addUser);

app.put('/api/users/:id', updateUser);

app.delete('/api/users/:id', deleteUser);
