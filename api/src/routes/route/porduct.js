const { Router } = require('express')
const { Product } = require('../../db')

const route = Router()

route.get('/', async(req,res) => {
    try {
        
    } catch (error) {
        
    }
})

route.post('/add', async (req, res) => {
    const {id, name, price, description} = req.body
    try {
        const newProduct = await Product.create({
            id,
            name,
            price,
            description
        })
        res.status(200).send(newProduct)
    } catch (error) {
        res.send(error)
    }
})

module.exports = route