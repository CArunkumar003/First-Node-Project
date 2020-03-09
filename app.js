const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


let mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.1.52/webproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 4580;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});