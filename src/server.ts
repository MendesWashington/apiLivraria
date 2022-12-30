import express from "express";
import { userRouter } from "routers/userRouter";
import { v4 as uuidv4} from "uuid";

const app = express();
const PORT = 3000;

app.use(express.json());

/* interface IUser {
  id: string;
  name: string;
  lastname: string;
  cpf?: string;
} */

type IUser = {
  id: string;
  name: string;
  lastname: string;
  cpf?: string;
}

app.use('/registeruser', userRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
