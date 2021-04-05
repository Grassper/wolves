if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const compression = require("compression");
// importing logger
const morgan = require("morgan");

// fixing cors
const cors = require("cors");

// secure headers
const helmet = require("helmet");

// connecting to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// initialing middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// configuring routes
const socialRoutes = require("./routes/social.routes");
const authRoutees = require("./routes/auth.routes");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/api", socialRoutes);
app.use("/users", authRoutees);

app.listen(process.env.PORT, () =>
  console.log("server started " + process.env.PORT)
);
