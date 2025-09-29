import express from "express";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
app.get("/", (req, res) => {
  console.log("Alguém acessou a rota raiz!");
  res.send("Hello World!");
});
