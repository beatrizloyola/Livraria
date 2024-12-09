const LivroModel = require("../models/LivroModel")

class LivroController{

    static async listar(req, res) {
        const s = req.query.s;
        const livros = await LivroModel.find();
        res.render("livro/listar", { livros, s });
    };

    static async cadastrar(req, res) {
        const { titulo, autor, genero, sinopse, id } = req.body;
        const novoLivro = new LivroModel({
            titulo: titulo,
            autor: autor,
            genero: genero,
            sinopse: sinopse,
            id: id,
        });
        await novoLivro.save();
        res.redirect(`/livros?s=1`);
    };


    static paginaCadastrar(req, res) {
        res.render("livro/cadastrar");
    };

    static async detalhar(req, res) {
        const id = parseInt(req.params.id);
        const livro = await LivroModel.findOne({id: id});

        if (livro) {
            res.render("livro/detalhar", { livro });
        } else {
            res.status(404).send("Livro não encontrado.");
        }
    };

    static async deletar(req, res) {
        const id = parseInt(req.params.id);
        await LivroModel.deleteOne({ id: id });
        res.redirect("/livros?s=2");
    };

    static async paginaEditar(req, res) {
        const id = parseInt(req.params.id);
        const livro = await LivroModel.findOne({ id: id });

        if (livro) {
            res.render("livro/editar", { livro });
        } else {
            res.status(404).send("Livro não encontrado.");
        }
    };

    static async editar(req, res) {
        const id = parseInt(req.params.id);
        const { titulo, autor, genero, sinopse } = req.body;

        await LivroModel.updateOne({ id: id }, { titulo, autor, genero, sinopse });
        res.redirect("/livros?s=3");
    };


}

module.exports = LivroController;