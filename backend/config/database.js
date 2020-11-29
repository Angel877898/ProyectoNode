const mysql = require('mysql')
const util = require('util')

// const pool = mysql.createPool({
//     connectionLimit: 19,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'empleados'
// })
 
const pool = mysql.createPool({
    connectionLimit: 19,
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bf6b81d70de194',
    password: 'b7cdca6e',
    database: 'heroku_3eaebe1104109de'
})
 

pool.query = util.promisify(pool.query)

module.exports=pool