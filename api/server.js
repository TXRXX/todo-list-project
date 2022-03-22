const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const routesTodo = require("./routes/todo");
const routesAuth = require("./routes/auth");
const routesUser = require("./routes/user");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(routesTodo);
app.use(routesAuth);
app.use(routesUser);
app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  origin: process.env.UI_ROOT_URI,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.UI_ROOT_URI);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(":: Connected to database successfully.");
});

app.get('/', function (req, res) {
  res.send("Hello World");
});

app.get("/logout", (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.redirect("/");
});

// Server Running Port
app.listen(4000, () => {
  console.log(":: Server has start.");
});
