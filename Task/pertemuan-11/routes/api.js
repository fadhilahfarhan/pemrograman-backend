// import express
const express = require("express");

// import StudentController
const StudentController = require("../controllers/StudentController")

//membuat objek router
const router = express.Router();

// membuat routing
router.get("/Students", StudentController.index);
router.post("/Students", StudentController.store);
router.put("/Students/:id", StudentController.update);
router.delete("/Students/:id", StudentController.destroy);

// export router
module.exports = router;