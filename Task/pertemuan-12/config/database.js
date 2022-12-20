//Import mysql
const mysql = require("mysql")

//Import dotenv dan menjalankan method config
require("dotenv").config()

//Desctructing object process.env
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env

//Membuat koneksi ke database menggunakan method createConnection
//method nya menerima parameter host, user, password, database
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE
})

//Menghubungkan ke database menggunakan connect
//menerima parameter callback
db.connect((err) => {
    if (err) throw err
    console.log("Connected to database")
})

//Export database
module.exports = db