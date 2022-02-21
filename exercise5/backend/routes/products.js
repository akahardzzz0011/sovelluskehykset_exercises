const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
let productData = require('../data/products.json')

let products = productData.products

router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:productId', (req, res) => {
    let foundId = products.findIndex(p => p.id === req.params.productId)
    console.log(typeof req.params.productId);
    console.log(foundId);
    if(foundId === -1) {
        let searchedItem = req.params.productId
        let foundProducts = products.filter(p => p.description.toLowerCase().includes(searchedItem.toLowerCase()))
        if(foundProducts.length > 0) {
            res.json(foundProducts)
            console.log("desc found");
        } else {
            foundProducts = products.filter(p => p.price === Number(searchedItem))
            if(foundProducts.length > 0) {
                res.json(foundProducts)
                console.log("price found");
            } else {
                foundProducts = products.filter(p => p.amount === Number(searchedItem))
                if(foundProducts.length > 0) {
                    res.json(foundProducts)
                    console.log("amount found");
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
        description: req.body.description,
        currency: req.body.currency,
        price: req.body.price,
        priceCents: req.body.priceCents,
        previousPrice: req.body.previousPrice,
        image: req.body.image,
        image02: req.body.image02,
        amount: req.body.amount
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

router.delete('/:productId', (req, res) => {
    let foundId = products.findIndex(u => u.id === req.params.productId)
    console.log(req.params.productId);
    if(foundId === -1) {
        res.sendStatus(404)
    } else {
        products.splice(foundId, 1)
        res.sendStatus(202)
    }
})
module.exports = router