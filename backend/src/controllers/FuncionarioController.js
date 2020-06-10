const Funcionario = require("../models/Funcionario");

module.exports = {
    async index(req, res) {
        const funcionario = await Funcionario.find();
        return res.json(funcionario);
    },

    async store(req, res) {
        const {nome, telefone, idade} = req.body;

        let funcionario = await Funcionario.findOne({telefone});

        if (!funcionario) {
            funcionario = await Funcionario.create({ nome, telefone, idade});
        }

        return res.json(funcionario);
    }
};