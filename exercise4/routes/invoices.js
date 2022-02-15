const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
let productList = require('../data/productData.json')

let products = productList.products

router.get('/', (req, res) => {
    console.log(products);
    res.send(products)
})

module.exports = router