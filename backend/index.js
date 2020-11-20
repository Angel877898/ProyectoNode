const morgan = require('morgan')
const express = require('express')
const app = express()
//routes
const user = require('./routes/user')
//Middlewares
const auth = require('./middleware/auth')
const cors = require('./middleware/cors')

app.use(cors)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",user)
app.use(auth)



app.listen(process.env.PORT || 8000, () => {
    console.log('server is running');
})