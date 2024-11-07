const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./Routes/product.route.js");
const app = express();

const cors = require("cors");

// Use CORS with default settings or configure it as needed
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app’s URL
    methods: ["GET", "PUT", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});
mongoose
  .connect(
    "mongodb+srv://jadoonh78:g4gZav4Dwel6MdXn@firstproject.hlooc.mongodb.net/NewAPI?retryWrites=true&w=majority&appName=FirstProject"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on Port 3000!");
    });
  })
  .catch(() => {
    console.log("Not Connected");
  });
