const express = require('express')
const router = express.Router()
const { v4: uuidv4 } =require('uuid')

const users = [
    {
        "id": uuidv4(),
        "name": "John Smith",
        "address": "streetroad 4",
        "phone": "044897485",
        "email": "john.smith@mail.com"

    }
]

router.post('/', (req, res) => {
    console.log(req.body)

    users.push({
        id: uuidv4(),
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    })
    res.sendStatus(201)
})

module.exports = router