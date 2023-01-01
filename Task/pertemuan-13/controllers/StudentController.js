//import data students
const Student = require("../models/Student");

//membuat class StudentController
//menggunakan async await untuk menampilkan data database
//memanggil method static all menggunakan async await
class StudentController {
    async index(req, res) {
        const student = await Student.all()

        if (student != 0) {
            const data = {
                message: "Menampilkan semua students",
                data: student
            }
            res.json(data);
        } else {
            const data = {
                message: `Student not found`
            };
            res.status(404).json(data)
        }
    };

    async store(req, res) {
        //menangkap data menggunakan req.body
        const {
            nama,
            nim,
            email,
            jurusan
        } = req.body

        //Set value
        const value = {
            nama,
            nim,
            email,
            jurusan
        }

        try {
            // Call static method create()
            const create = await Student.create(value)

            // Response format
            const data = {
                message: "Menambah data student baru",
                data: { id: create.insertId, ...value }
            }
            // Set response to JSON
            return res.json(data)
        } catch (error) {
            return res.json({ message: "Data harus lengkap" })
        }
    };

    async update(req, res) {
        // mendapatkan id dari params
        const { id } = req.params
        //mengecek data student
        const student = await Student.find(id)
        if (!student) return res.status(404).json({ message: "Student Not Found" })

        // mendapatkan data dari body atau inputan
        const { nama, nim, email, jurusan } = req.body

        // menset data
        const value = {
            nama: nama || student.nama,
            nim: nim || student.nim,
            email: email || student.email,
            jurusan: jurusan || student.jurusan
        }

        try {
            // memanggil method update
            await Student.update(value, student.id)
            const data = {
                message: `data telah terupdate`,
                data: { id, ...value }
            }
            return res.status(200).json(data)
        } catch (error) {
            return res.status(400).json({ message: error })
        }

    }

    async destroy(req, res) {
        const { id } = req.params
        const student = await Student.find(id)
        if (!student) return res.status(404).json({ message: "Student Not Found" })

        try {
            // memanggil method delete
            await Student.delete(id)

            const data = {
                message: `menghapus data student berhasil`
            }
            return res.status(200).json(data)
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    async show(req, res) {
        // Get params
        const { id } = req.params

        // memanggil method find
        const student = await Student.find(id)

        const data = {
            message: student ? `mendapatkan data student` : `Student Not Found`,
            data: student
        } 
        return res.status(student ? 200 : 404).json(data)
    }


    //set respons menjadi Json

}

//membuat objek StudentController
const object = new StudentController();

//export object
module.exports = object;