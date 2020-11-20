const express = require('express')
const jwt = require('jsonwebtoken')
const user = express.Router()
const db = require('../config/database')
const validateEmail= require('../functions/validateEmail')

user.post("/login", async (req,res,next) => {
    const {email, password} = req.body
    const query = `SELECT * FROM admins WHERE correo ='${email}' AND contrasena = '${password}'; `
    const rows = await db.query(query)
    
    if(email && password) {
        const isEmail = validateEmail(email)
        if(isEmail) {
            if(rows.length ==1) {
                const token = jwt.sign({
                    id: rows[0].id,
                    mail: rows[0].correo,
                    name: rows[0].nombre,
                    last_name: rows[0].apellido
                }, "debugkey")
                return res.status(200).json({code:200, message:token})
            }else {
                return res.status(200).json({code:401, message:"Usuario y/o contraseña incorrecto"})
            }
        }
        return res.status(200).json({code:401, message:"Ingresa un correo valido"})
        
    }
    return res.status(200).json({code:500, message:"Campos incompletos"})
    
})

user.get("/", async (req,res,next) => {
    const query="SELECT * FROM admins"
    const rows = await db.query(query)
    return res.status(200).json({code:200, message:rows})
})
module.exports=user;