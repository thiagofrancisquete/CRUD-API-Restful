//chamando os pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configuracao da variavel app para o body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// definindo uma porta para executar a API
var port = process.env.port || 8000;

// criando uma instancia das rotas via express
var router = express.Router();

// criando uma rota de exemplo
router.get('/', function(req, res){
  res.json({ message: 'Beleza! Bem vindo a nossa loja!'});
});

// definindo um padrao das rotas prefixadas com '/api'
app.use('/api', router);

// iniciando a aplicação
app.listen(port);
console.log('iniciando a app na porta ' + port);

