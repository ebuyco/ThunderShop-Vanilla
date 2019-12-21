const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const webPackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./client/webpack/webpack.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lkasld235j"]
  })
);

app.use(webPackMiddleware(webpack(webpackConfig)));

app.listen(3000, () => {
  console.log("Listening to port http://localhost:3000/");
});
