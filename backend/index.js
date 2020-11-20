const morgan = require('morgan')
const express = require('express')
const app = express()
//routes
const user = require('./routes/user')
//Middlewares
const auth = require('./middleware/auth')
const cors = require('./middleware/cors')
const empleados = require('./routes/empleados')


app.use(cors)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/user",user)
app.use(auth)


app.get('/', (req, res, next) => res.status(200).json( {code: 1, message: 'Bienvenido'} ))
app.use('/empleados', empleados)



app.listen(process.env.PORT || 8000, () => {
    console.log('server is running');
})