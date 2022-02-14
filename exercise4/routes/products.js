const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const products = [
    {
        "id": uuidv4(),
        "manufacturer": "Asus",
        "category": "laptops",
        "description": "asus model 3000",
        "price": 399
    //  "image": "image"
    }
]

router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:productId', (req, res) => {
    let foundId = products.findIndex(p => p.id === req.params.productId)

    if(foundId === -1) {
        res.sendStatus(404)
        return
    } else {
        res.json(products[foundId])
    }
})

router.post('/', (req, res) => {
    console.log(req.body);

    products.push({
        id: uuidv4(),
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
    // image: req.body.image
    })
    res.sendStatus(201)
})

router.put('/:productId', (req, res) => {
    let item = products.find(p => p.id === req.params.productId)
    if(item) {
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