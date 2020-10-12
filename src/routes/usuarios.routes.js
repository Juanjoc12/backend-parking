const express = require('express');
const router = express.Router();

const User = require('../models/usuarios.js');

router.get('/', async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.get('/:id', async(req, res) => {
    const task = await User.findById(req.params.id);
    res.status(200).json(task);
})

router.post('/', (req, res) => {
    User.create(req.body, (err, data) => {
        if (err) console.error(err);
        console.log("Usuario registrado", data);
        res.status(200).json(data);
    });
})

router.put('/:id', async(req, res) => {
    const { nombre, tipo, placa } = req.body;
    const newTask = { nombre, tipo, placa };
    const data = await User.findByIdAndUpdate(req.params.id, newTask);
    res.status(200).json(data);
})

router.delete('/:id', async(req, res) => {
    const data = await User.findByIdAndRemove(req.params.id);
    res.status(200).json(data);
})

module.exports = router;