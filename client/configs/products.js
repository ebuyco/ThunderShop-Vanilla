const Repository = require('./config');

class ProductsRepository extends Repository {}

module.exports = new ProductsRepository('products.json');
