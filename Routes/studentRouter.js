const express = require("express");
const { addStudents, test } = require("../controller/studentController");
const router = express.Router()


router.route("/students").post(addStudents);
router.route("/test").get(test);

module.exports = router