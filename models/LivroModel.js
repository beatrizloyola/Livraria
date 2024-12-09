const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const livroSchema = Schema({
    titulo: String,
    autor: String,
    genero: String,
    sinopse: String,
    id: Number
});

module.exports = mongoose.model("Livro", livroSchema)