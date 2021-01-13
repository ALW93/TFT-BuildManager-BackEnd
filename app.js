const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/API/users");
const boardRouter = require("./routes/API/board");
const guideRouter = require("./routes/API/guide");

app.use(bearerToken());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routers
app.options("/", cors());
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/boards", boardRouter);
app.use("/guides", guideRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set("WWW-Authenticate", "Bearer");
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});

module.exports = app;
