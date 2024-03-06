import cors from 'cors';
import express, { Application } from 'express';

export default class RestServer {
  private static instance: RestServer;
  private app: Application;
  private constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
      })
    );

    // Routes
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    
  }

  static getInstance() {
    if (!RestServer.instance) RestServer.instance = new RestServer();
    return RestServer.instance;
  }

  async start() {
    await new Promise((resolve, reject) => {
      this.app.listen(process.env.PORT, () => {
        console.log(`REST Server running on port ${process.env.PORT}`);
        resolve(true);
      });
    });
  }
}
