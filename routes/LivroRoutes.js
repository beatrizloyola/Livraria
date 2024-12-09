const express = require("express");
const routes = express.Router();
const LivroController = require("../controller/LivroController")
const auth = require("../middlewares/usuarioAuth");

//

routes.get("/livros", LivroController.listar)

routes.get("/livros/cadastrar", auth, LivroController.paginaCadastrar)
routes.post("/livros", auth, LivroController.cadastrar)

routes.get("/livros/:id", LivroController.detalhar)

routes.get("/livros/editar/:id", auth, LivroController.paginaEditar)
routes.post("/livros/editar/:id", auth, LivroController.editar)

routes.post("/livros/deletar/:id", auth, LivroController.deletar)

//

module.exports = routes;