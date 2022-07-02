const router = require('express').Router()
const conCliente = require('../models/Cliente')


router.get('/', async (req, res) => {
    try {
        const cliente = await conCliente.find()

        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.post('/', async (req, res) => {
    try {
        conCliente.create(req.body)
            .then((cliente) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(cliente)
            }, err => res.status(500).send(err))
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router