const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const atendenteSchema = Schema({
    id: Number,
    nome: String,
    funcao: String,
    salario: Number,
});

module.exports = mongoose.model("Atendente", atendenteSchema)