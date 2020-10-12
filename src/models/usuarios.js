const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    placa: { type: String, required: true }
});

module.exports = mongoose.model('usuarios', TaskSchema);