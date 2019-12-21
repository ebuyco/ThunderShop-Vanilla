const Configs = require("./configs");

class CartsRepository extends Configs {}

module.exports = new CartsRepository("../data/carts.json");
