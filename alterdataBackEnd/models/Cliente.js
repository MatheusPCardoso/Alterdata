const mongoose = require('mongoose')

const Cliente = mongoose.model('cliente', {
  cod_cliente: Number,
  data: Date,
  status: Boolean,
  motivo_falha: String
})

module.exports = Cliente
