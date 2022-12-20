//import data students
const Student = require("../models/Student");

//membuat class StudentController
//menggunakan async await untuk menampilkan data database
//memanggil method static all menggunakan async await
class StudentController {
    async index(req, res) {
        const data = {
            message: "Menampilkan semua student",
            data: await Student.all()
        };

        //set respons menjadi Json
        res.json(data);
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

        //memanggil method static all()
        await Student.create(value)

        //format respons
        const data = {
            message: `Menambah data student`,
            data: { value }
        };

        //set respons menjadi Json
        res.json(data);
    };

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        student[id] = nama;

        const data = {
            message: `Mengedit data student ${id}, nama ${nama}`,
            data: [student]
        };

        res.json(data);
    };

    destroy(req, res) {
        const { id } = req.params;

        student.splice(id, 1);

        const data = {
            message: `menghapus data student ${id}`,
            data: [student]
        };

        res.json(data);
    };
}

//membuat objek StudentController
const object = new StudentController();

//export object
module.exports = object;