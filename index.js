const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');
const homeRouter = require('./routes/views/home');
const homeApiRouter = require('./routes/api/home');

// app
const app = express();

// middlewares
app.use(bodyParser.json());

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


// routes
app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);
app.use("/home", homeRouter);
app.use("/api/home", homeApiRouter);


// redirect
app.get('/', function(req, res) {
  //res.redirect('/products');
  res.redirect("/home")
});

// server
const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
