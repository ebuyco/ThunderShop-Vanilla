const express = require('express');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../client/webpack/webpack.config.js');
const cors = require('cors');
const path = require('path');
const productsRouter = require('../client/routes/products');
const cartsRouter = require('../client/routes/carts');
const app = express();



app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// require('dotenv').config({ path: '../variables.env' });
app.use(bodyParser.json());
app.use(productsRouter);
app.use(cartsRouter);

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
