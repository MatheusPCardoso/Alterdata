const express = require('express')
const router = require('./controllers/clientController')
var cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

// rotas
app.use('/cliente', router)

mongoose
  .connect(
    'mongodb+srv://home:11223344@alterdata.seraxcl.mongodb.net/Clientes?retryWrites=true&w=majority',
  )
  .then(() => {
    app.listen(3001)
  })
  .catch((err) => console.log(err))
