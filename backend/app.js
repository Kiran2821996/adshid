const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
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
app.use("/api/auth",Auth)
app.use("/api/course",Course)
app.use("/api/contact",contactus)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT} `);
});
