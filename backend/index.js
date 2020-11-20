const morgan = require('morgan')
const express = require('express')
const app = express()
const empleados = require('./routes/empleados')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res, next) => res.status(200).json( {code: 1, message: 'Bienvenido'} ))
app.use('/empleados', empleados)

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');
})

