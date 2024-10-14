const express = require('express')
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser')
app.use(morgan('dev'))

if (process.env.NODE_ENV != 'development') {
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000)


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))




//Rutas
app.use('/api/v1/users', require('./routes/user.routes')); 
app.use('/api/v1/tools', require('./routes/tool.routes')); 


app.listen(app.get('port'), () => { // correr el servidor
    console.log(`Server running on http://localhost:${app.get('port')}/api/v1`);
})