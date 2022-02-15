const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
let productData = require('../data/productData.json')

let products = productData.products

router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:productId', (req, res) => {
    let foundId = products.findIndex(p => p.id === req.params.productId)
    
    if(foundId === -1) {
        let searchedItem = req.params.productId
        let foundProducts = products.filter(p => p.name.toLowerCase().includes(searchedItem.toLowerCase()))
        if(foundProducts.length > 0) {
            res.json(foundProducts)
        } else {
            foundProducts = products.filter(p => p.manufacturer.toLowerCase().includes(searchedItem.toLowerCase()))
            if(foundProducts.length > 0) {
                res.json(foundProducts)
            } else {
                foundProducts = products.filter(p => p.category.toLowerCase().includes(searchedItem.toLowerCase()))
                if(foundProducts.length > 0) {
                    res.json(foundProducts)
                } else {
                    res.sendStatus(404)
                }
            }
        }
    } else {
        res.json(products[foundId])
    }
    
})

router.post('/', (req, res) => {
    console.log(req.body);

    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.sendStatus(201)
})

router.put('/:productId', (req, res) => {
    let item = products.find(p => p.id === req.params.productId)
    if(item) {
        item.name = req.body.name
        item.manufacturer = req.body.manufacturer
        item.category = req.body.category
        item.description = req.body.description
        item.price = req.body.price
        
        res.sendStatus(202)
    } else {
        res.sendStatus(404)
    }
})
module.exports = router