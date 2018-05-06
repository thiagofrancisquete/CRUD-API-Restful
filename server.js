/* chamando os pacotes */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./app/models/produto');

mongoose.Promise = global.Promise;

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


router.use(function (req, res, next) {
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

// metodo POST
router.route('/produtos').post(function (req, res) {
    var produto = new Produto();

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.desc = req.body.desc;

    produto.save(function (error) {
      if (error)
        res.send('Erro ao tentar salvar o produto ' + error);
      res.json({
        message: 'Produto cadastrado com sucesso!'
      });
    })
  })

  // selecionar todos os produtos, acessar em GET http://localhost:8000/api/produtos
  .get(function (req, res) {
    Produto.find(function (error, produtos) {
      if (error)
        res.send("erro ao tentar selecionar todos os produtos " + error);
      res.json(produtos);
    })
  })

// rotas que irão terminar em '/produtos/produto_id' 
router.route('/produtos/:produto_id')

  // selecionar por id (http://localhost:8000/api/produtos/produto_id)
  .get(function (req, res) {
    Produto.findById(req.params.produto_id, function (error, produto) {
      if (error)
        res.send('Id do produto nao encontrado ' + error)
      res.json(produto)
    })
  })

  // metodo PUT para atualização
  .put(function (req, res) {
    // achar o id do produto
    produto.findById(req.params.produto_id, function (error, produto) {
      if (error)
        res.send('Id do produto nao encontrado ' + error)

      // atualizando os dados
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      produto.descricao = req.body.descricao;

      // salvando as propriedades
      produto.save(function (error) {
        if (error)
          res.send('Erro au atualizar o produto ' + error);
        res.json({
          message: 'Produto atualizado com sucesso'
        })
      })
    })
  })

  // criando metodo delete
  .delete(function (req, res) {

    Produto.remove({
      _id: req.params.produto_id
    }, function (error) {
      if (error)
        res.send('Id do produto nao encontrado ' + error);
      res.json({
        message: 'Produto excluido com sucesso'
      });
    });
  })

/* definindo um padrao das rotas prefixadas com '/api' */
app.use('/api', router);

app.listen(port);
console.log('iniciando a app na porta ' + port);