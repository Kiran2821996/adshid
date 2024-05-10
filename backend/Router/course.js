const controller = require("../Controller/Course")
const express = require("express")
const router = express.Router()

router.post("/addcourse",controller.AddCourse)
router.post("/trash/:id",controller.courseTrash)
router.put("/update/:id",controller.CourseUpdate)
router.get("/getdata",controller.GetData)

module.exports = router