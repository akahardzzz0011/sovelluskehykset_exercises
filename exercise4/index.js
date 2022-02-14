const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')

const products = require('./routes/products')
const users = require('./routes/users')
const invoices = require('./routes/invoices')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Working")
})

app.use('/products', products)
app.use('/users', users)
app.use('/invoices', invoices)
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})