var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/* classe produto: id - int, nome - string, preco - number, desc - string  */

var ProdutoSchema = new Schema({
  nome: String,
  preco: Number,
  desc: String,
  id: Number
});

module.exports = mongoose.model('Produtos', ProdutoSchema);