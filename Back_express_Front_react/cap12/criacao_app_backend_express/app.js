const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); // libera pra todas as rotas
const PORT = 3001;
app.use(express.json());

// Arquivo com rotas para o cadastro de livros
const livros = require("./livros");
app.use("/livros", livros); // identificação da rota e da const (require) associada

// app.get("/", (req, res) => {
//   res.send("Olá... Bem-vindo");
// });

// app.post("/filmes", (req, res) => {
//   // const titulo = req.body.titulo;
//   // const genero = req.body.genero;
//   const { titulo, genero } = req.body;
//   res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
// });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
