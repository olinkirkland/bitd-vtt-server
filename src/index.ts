import dotenv from 'dotenv';
import RestServer from './controllers/rest-server';

initialize();

async function initialize() {
  // Env variables
  dotenv.config();

  // Start REST server
  await RestServer.getInstance().start();
}
