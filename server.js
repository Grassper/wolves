require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// setting up server to accept json
app.use(express.json());

// configuring routes
const socialRoutes = require("./routes/social.routes");

app.use('/', socialRoutes)

app.listen(3000, () => console.log("server started"));