const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:Slipknot12@cluster0.eq4qd.mongodb.net/RetoBD?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;