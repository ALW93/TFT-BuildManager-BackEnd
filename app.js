const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const buildRouter = require("./routes/builds");
const commentRouter = require("./routes/comments");
const apiRouter = require("./routes/data");

app.use(bearerToken());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routers
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/builds", buildRouter);
app.use("/comments", commentRouter);
app.use("/api", apiRouter);

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
