const express = require('express')
const empleados = express.Router()
const db = require('../config/database')
const { isName, isMail, isPhone, isAddress } = require('../functions/validate')

// altas
empleados.post('/', async (req, res, next) => {
    const { nombre, apellidos, telefono, correo, direccion } = req.body
    if( nombre && apellidos && telefono && correo && direccion ) {
        // arreglo con objetos para saber si los datos son validos
        const validations = [
            {
                campo: 'Nombre',
                valido: isName(nombre)
            },
            {
                campo: 'Apellido',
                valido: isName(apellidos)
            },
            {
                campo: 'Telefono',
                valido: isPhone(telefono)
            },
            {
                campo: 'Correo',
                valido: isMail(correo)
            },
            {
                campo: 'Dirección',
                valido: isAddress(direccion)
            }
        ]
        // arreglo con objetos de campos invalidos
        const invalidFields = validations.filter(dato => !dato.valido)
        if( invalidFields.length === 0 ) {
            let query = `INSERT INTO empleados (nombre, apellidos, telefono, correo, direccion) VALUES ('${nombre}', '${apellidos}', '${telefono}', '${correo}', '${direccion}')`
            const rows = await db.query(query)
            if( rows.affectedRows == 1 ) {
                return res.status(201).json({
                    code: 201,
                    message: 'Empleado agregado correctamente'
                })
            }
            return res.status(404).json({
                code: 404,
                message: 'Falló la inserción'
            })
        }
        return res.status(500).json({
            code: 500,
            message: 'Hay datos no válidos',
            campos: invalidFields
        }) 
    }
    return res.status(500).json({
        code: 500,
        message: 'Campos incompletos'
    })
})

// bajas
empleados.delete('/:id([0-9]{1,3})', async (req, res, next) => {
    const { id } = req.params
    const query = `DELETE FROM empleados WHERE id = ${id}`
    const rows = await db.query(query)
    if( rows.affectedRows ) {
        return res.status(200).json({
            code: 200,
            message: 'Empleado borrado correctamente'
        })
    }
    return res.status(404).json({
        code: 404,
        message: 'Empleado no encontrado'
    })
})

// consulta general
empleados.get('/', async (req, res, next) => {
    const query = `SELECT * FROM empleados`
    const empleados = await db.query(query)
    if( empleados.length > 0 ) {
        return res.status(200).json({
            code: 200,
            message: empleados
        })
    }
    return res.status(404).json({
        code: 404,
        message: 'No se encontraron usuarios'
    })
})

// cambios
empleados.put('/:id([0-9]{1,3})', async (req, res, next) => {
    const { id } = req.params
    const { nombre, apellidos, telefono, correo, direccion } = req.body
    if( nombre && apellidos && telefono && correo && direccion ) {
        const validations = [
            {
                campo: 'Nombre',
                valido: isName(nombre)
            },
            {
                campo: 'Apellido',
                valido: isName(apellidos)
            },
            {
                campo: 'Telefono',
                valido: isPhone(telefono)
            },
            {
                campo: 'Correo',
                valido: isMail(correo)
            },
            {
                campo: 'Dirección',
                valido: isAddress(direccion)
            }
        ]
        const invalidFields = validations.filter(dato => !dato.valido)
        if( invalidFields.length === 0 ) {
            let query = `UPDATE empleados SET nombre='${nombre}', apellidos='${apellidos}', telefono='${telefono}', correo='${correo}', direccion='${direccion}' WHERE id = ${id}`
            const rows = await db.query(query)
            if( rows.affectedRows == 1 ) {
                return res.status(200).json({
                    code: 200,
                    message: 'Empleado actualizado correctamente'
                })
            }
            return res.status(404).json({
                code: 404,
                message: 'Falló la actualizacion'
            })
        }
        return res.status(500).json({
            code: 500,
            message: 'Hay datos no válidos',
            campos: invalidFields
        }) 
    }
    return res.status(500).json({
        code: 500,
        message: 'Campos incompletos'
    })
})

module.exports = empleados