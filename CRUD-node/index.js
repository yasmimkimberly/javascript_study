import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

const usuarios = [];

app.get("/", (req, res) => {
  return res.json(usuarios);
});

app.post("/", (req, res) => {
  const { name, email } = req.body;
  usuarios.push({ name, email });
  return res.json({ name, email });
});

app.put("/:index", (req, res) => {
  const { index } = req.params;
  const { name, email } = req.body;
  usuarios[index] = { name, email };
  return res.json(usuarios);
});

app.delete("/:index", (req, res) => {
  const { index } = req.params;
  usuarios.splice(index, 1);
  return res.send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
