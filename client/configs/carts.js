const Repository = require('./config');

class CartRepository extends Repository {}

module.exports = new CartRepository('carts.json');
