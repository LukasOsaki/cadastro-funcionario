const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    idade: Number,
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);