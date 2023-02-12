const express = require("express");
const { addStudents, studentsDatas } = require("../controller/studentController");
const router = express.Router()


router.route("/students").post(addStudents);
router.route("/studentsDatas").get(studentsDatas);

module.exports = router