// MODULES
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv/config");
//const connectDB = require("./config/mongodb");
const { connectCloudinary } = require("./config/cloudinary");
const adminRouter = require("./routers/adminRouter");
const { default: mongoose } = require("mongoose");

// app config
const app = express();
const port = process.env.PORT || 4000;
//connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

/*app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to database", err);
  });
