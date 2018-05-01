/* chamando os pacotes */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./app/models/produto');

/* conectando o mlab (cloud) */
mongoose.connect('mongodb://crud-api-restful:thiago123@ds014648.mlab.com:14648/node-crud-api');

/* conectando local
mongoose.connect('mongodb://localhost/nome-da-api)
*/

/* configuracao da variavel app para o body-parser */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/* definindo uma porta para executar a API */
var port = process.env.port || 8000;

/* Rotas da API */
// criando uma instancia das rotas via express
var router = express.Router();


router.use(function(req, res, next){
  console.log("Algo esta acontecendo aqui...");
  next();
});

/* criando uma rota de exemplo */
router.get('/', function (req, res) {
  res.json({
    message: 'Beleza! Bem vindo a nossa loja!'
  });
});

/* APIS */
router.route('/produtos').post(function(req, res){
  var produto = new Produto();

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.desc = req.body.desc;

  produto.save(function(error){
    if(error)
      res.send('Erro ao tentar salvar o produto ' +error);
    res.json({ message: 'Produto cadastrado com sucesso!'});
  })
})

/* definindo um padrao das rotas prefixadas com '/api' */
app.use('/api', router);

/* iniciando a aplicação */
app.listen(port);
console.log('iniciando a app na porta ' + port);