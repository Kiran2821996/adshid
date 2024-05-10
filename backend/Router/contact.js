const controller = require("../Controller/Contact")
const express = require("express")
const router = express.Router()

router.post("/addcontact",controller.AddContact)
router.get("/getdata",controller.GetData)

module.exports = router