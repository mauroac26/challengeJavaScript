const exp = require('constants');
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

//const { mongoose } = require('./database');

//setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/api/presupuesto', require('./routes/presupuesto.routes'))
app.use('/api/listar', require('./routes/listar.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})