//import data students
const student = require("../data/students");

//membuat class StudentController
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua student",
            data: [student]
        };

        res.json(data);
    };

    store(req, res) {
        const { nama } = req.body;

        student.push(nama)

        const data = {
            message: `Menambah data student: ${nama}`,
            data: [student]
        };

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