const express = require('express');
const router = express.Router();

const products = [
    {
        name: " Test",
        price:1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfR0XWllmG3UzgaG4TOnFFkBJB4c26xUQJHQ&usqp=CAU"
    },{
        name: " Test2",
        price:2,
        image: "https://i0.wp.com/mascooriente.co/wp-content/uploads/2020/11/teckel.jpg?fit=520%2C355&ssl=1"
    }
]

router.get('/', function(req, res){
    res.render("products",{products});
});

module.exports = router;
