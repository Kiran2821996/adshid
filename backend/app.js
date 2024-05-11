const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const Razorpay = require("razorpay")
const crypto = require("crypto");
require('dotenv').config(); 
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch(er => {
    console.log(er, "failed to connect database");
  });




/// middelware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));



const Auth = require("../backend/Router/auth")
const Course = require("../backend/Router/course")
const contactus = require("../backend/Router/contact")
const order = require("../backend/Router/order")
app.use("/api/auth",Auth)
app.use("/api/course",Course)
app.use("/api/contact",contactus)
app.use("/api/order",order)


// payment razorpay - START

app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});
// payment razorpay - END

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT} `);
});
