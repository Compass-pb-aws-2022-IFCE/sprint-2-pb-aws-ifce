const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.get('/PesquisandoPerfil/GitHub/:name', controller.pesquisarPerfilGitHub);


module.exports = router;