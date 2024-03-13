import dotenv from 'dotenv';
import RestServer from './controllers/rest-server';
import { UserModel } from './models/user';
import mongoose from 'mongoose';

initialize();

async function initialize() {
  // Env variables
  dotenv.config();

  if (!process.env.DB_URI) return console.error('DB_URI not set');

  console.log('Connecting to MongoDB ...');
  await mongoose.connect(process.env.DB_URI);
  console.log('Connected to MongoDB');
  console.log(`${await UserModel.countDocuments()} users`);

  // Start REST server
  await RestServer.getInstance().start();
}
