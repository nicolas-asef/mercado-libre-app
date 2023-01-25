const { Router } = require('express');
const productRoute = require('./route/porduct')

const route = Router()

route.use('/product', productRoute)

module.exports = route;