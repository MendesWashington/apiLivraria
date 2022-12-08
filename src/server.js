const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let id = 0;
let usuarios = [];

app.get("/", (req, res) => {
  return res.status(200).json({ usuarios });
});

app.post("/", (req, res) => {
  const { nome, nascimento } = req.body;
  if (id === 0) {
    const user = {
      id,
      nome,
      nascimento,
      livrosAlugados: [],
    };
    usuarios.push(user);
  } else {
    id = id + 1;
    const user = {
      id,
      nome,
      nascimento,
      livrosAlugados: [],
    };
    usuarios.push(user);
  }
  const newUser = usuarios.find((user) => user.id === id);
  if (!newUser) {
    throw new Error("usuários não encontrado");
  }
  return res.status(201).json(newUser);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = usuarios.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado!",
    });
  }
  return res.status(200).json(nome);
});

app.put("/:id", (req, res) => {
  const { nome, nascimento } = req.params;
  const user = usuarios.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado!",
    });
  }
  user.nome = nome;
  user.nascimento = nascimento;
  user.livrosAlugados = [];

  return res.status(200).json(user);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const user = usuarios.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado!",
    });
  }
  return res.status(200).json(user);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
