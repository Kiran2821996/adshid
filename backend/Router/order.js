const orderController = require("../Controller/Order");
const express = require("express");
const router = express.Router();

router.post("/createorder", orderController.createOrder);
router.get("/getorders", orderController.getOrderData);
router.delete("/deleteorder/:id", orderController.deleteOrder);
router.put("/updateorder/:id", orderController.updateOrder);

module.exports = router;
