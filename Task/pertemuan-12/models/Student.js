//Import database
const db = require("../config/database")

//Membuat class model Student
class Student {
    //membuat method static all
    //async solusi asyncronus
    //karena data dari database itu asyncronus
    //return promise
    static all() {        
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students`

            db.query(query, (err, results) => {
                resolve(results)
            })
        })
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO students SET ?`

            db.query(query, data, (err, result) => {
                resolve(result)
            })
        })
    }
}

//Export Student
module.exports = Student