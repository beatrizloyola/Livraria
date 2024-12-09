const AtendenteModel = require("../models/AtendenteModel")

class AtendenteController{

    static async listar(req, res) {
        const s = req.query.s;
        const livros = await LivroModel.find();
        res.render("atendente/listar", { livros, s });
    };

    static async cadastrar(req, res) {
        const { nome, id, funcao, salario} = req.body;
        const novoAtendente = new AtendenteModel({
            nome: nome,
            id: id,
            funcao: funcao,
            salario: salario,
        });
        await novoAtendente.save();
        res.redirect(`/atendentes?s=1`);
    };


    static paginaCadastrar(req, res) {
        res.render("atendente/cadastrar");
    };

    static async detalhar(req, res) {
        const id = parseInt(req.params.id);
        const atendente = await AtendenteModel.findOne({id: id});
    
        if (atendente) {
            res.render("atendente/detalhar", { atendente });
        } else {
            res.status(404).send("Atendente não encontrado.");
        }
    };

    static async deletar(req, res) {
        const id = parseInt(req.params.id);
        await AtendenteModel.deleteOne({ id: id });
        res.redirect("/atendentes?s=2");
    };

    static async paginaEditar(req, res) {
        const id = parseInt(req.params.id);
        const atendente = await AtendenteModel.findOne({ id: id });
    
        if (atendente) {
            res.render("atendente/editar", { atendente });
        } else {
            res.status(404).send("Atendente não encontrado.");
        }
    };

    static async editar(req, res) {
        const id = parseInt(req.params.id);
        const { nome, salario, funcao } = req.body;
    
        await AtendenteModel.updateOne({ id: id }, { nome, funcao, salario});
        res.redirect("/atendentes?s=3");
    };


}

module.exports = AtendenteController;