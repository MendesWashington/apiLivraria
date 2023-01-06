import "reflect-metadata"
import express from "express";
import { AppDataSource } from "./database/data-source";
import { userRouter } from "./routers/userRouter";

const port = 3000;

AppDataSource.initialize().then(() => {
  
  const app = express();
  
  app.use(express.json());
  
  app.use('/registeruser', userRouter)

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

}).catch((err) => {
  console.error(`Error during Data source initialization ${err}`);
  
})
