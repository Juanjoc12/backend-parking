const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const { initialize } = require('express-openapi');

const { mongoose } = require('./database')

const app = express();
var cors = require('cors');
const docs = require('../docs/api-doc');

app.use(cors());
//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

initialize({ app, apiDocs: docs, paths: '../docs/paths' });

//Routes
app.use('/api/users', require('./routes/usuarios.routes'))
    //Static files


//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});