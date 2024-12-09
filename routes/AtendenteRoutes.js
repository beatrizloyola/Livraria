const express = require("express");
const routes = express.Router();
const AtendenteController = require("../controller/AtendenteController")
const auth = require("../middlewares/usuarioAuth");

//

routes.get("/atendentes", AtendenteController.listar)

routes.get("/atendentes/cadastrar", auth, AtendenteController.paginaCadastrar)
routes.post("/atendentes", auth, AtendenteController.cadastrar)

routes.get("/atendentes/:id", AtendenteController.detalhar)

routes.get("/atendentes/editar/:id", auth, AtendenteController.paginaEditar)
routes.post("/atendentes/editar/:id", auth, AtendenteController.editar)

routes.post("/atendentes/deletar/:id", auth, AtendenteController.deletar)

//

module.exports = routes;