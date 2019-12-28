const express = require('express');
const cartsRepo = require('../configs/carts');
const productsRepo = require('../configs/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();
