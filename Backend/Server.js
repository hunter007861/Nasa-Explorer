const express = require("express");
const cors = require("cors");
require("dotenv").config();
const aopd = require('./src/routers/api/v1/aopd/aopd.routes');

//app config
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

//middleware
app.use(cookieParser());
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  methods: "GET, PUT, POST, DELETE, PATCH",
  credentials: true,
  origin: "http://localhost:5173",
};

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  next();
};
app.use(allowCrossDomain);
app.options("*", cors());
app.use(cors(corsOptions));

//routes
app.get("/", (req, res) => res.status(200).send("Nasa API webserver"));
app.use("/apod", aopd);

//Listening
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
