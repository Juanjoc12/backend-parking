const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:Contraseña@cluster0.eq4qd.mongodb.net/NombreBD?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
