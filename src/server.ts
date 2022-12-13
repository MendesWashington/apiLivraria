import express from "express";
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

const users: IUser[] = [];

app.post("/user", (req, res) => {
  const { name, lastname, }: IUser = req.body;

  const user = {
    id: uuidv4(),
    name,
    lastname,
  };
  
  users.push(user);

  return res.status(201).json({ message: "Data saved success!" });
});

app.get("/user/list", (req, res) => {
  return res.status(200).json(users);
});

app.get("/user/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((userId) => userId.id === id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found.", statusCode: 404 });
    }

    return res.status(200).json(user);
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
