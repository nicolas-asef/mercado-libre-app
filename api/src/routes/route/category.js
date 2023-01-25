const { Router } = require('express')
const { Category } = require('../../db')

const route = Router()

route.post('/add', async (req, res) => {
    const {id, name} = req.body
    try {
        const newCategory = await Category.create({
            id,
            name,
        })
        res.status(200).send(newCategory)
    } catch (error) {
        res.send(error)
    }
})

module.exports = route