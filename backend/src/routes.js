const express = require('express');
const FuncionarioController = require("./controllers/FuncionarioController");

const routes = express.Router();

routes.get('/funcionario', FuncionarioController.index);

routes.post('/funcionario', FuncionarioController.store);


module.exports = routes;