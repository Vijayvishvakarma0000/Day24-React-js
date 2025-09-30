const express = require("express");
const router = express.Router()
const {createStudent} = require("../controller/StudentController.js")

router.post("/create-student",createStudent)

module.exports=router;