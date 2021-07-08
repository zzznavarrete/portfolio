const express = require('express');
const app = express();
const path = require("path")
const productsRouter = require('./routes/products');

app.get("/", function(req, res, next){
    res.send({hello: "world"});
})

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/products", productsRouter);


const server = app.listen(8000, function(){
    console.log(`listening http://localhost:${server.address().port}`);
})

