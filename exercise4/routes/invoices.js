const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
//const bodyParser = require('body-parser')
let product = require('./products')

//router.use('/products', products)
router.get('/', (req, res) => {
    let productList = product.products
    console.log(product.products);
    console.log(productList);
    console.log(product);
    res.send(product.products)
})

module.exports = router