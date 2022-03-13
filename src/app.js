import express from 'express'
import config from './config'

import productsRoutes from './routes/products.routes'

const app = express()
const cors = require('cors')

//settings
app.set('port', config.port)

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes)

export default app