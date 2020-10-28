const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken, requireAuth } = require("../security");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utility");
const { User } = require("../../db/models");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

const validateUsername = check("username")
  .exists({ checkFalsy: true })
  .withMessage("Please enter a Username.");

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please enter a Valid Email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a Password."),
];

// POST/user No Create User
userRouter.post(
  "/",
  validateUsername,
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(r({ username, email, hashedPassword }));
    const token = getUserToken(user);
    res.cookie("token", token);
    res.status(201).json({ user: user.toSafeObject(), token });
  })
);

// POST/user/token No Login Validation
userRouter.post(
  "/token",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.cookie("token", token);
    res.json({ token, user: { id: user.id } });
  })
);

// GET/user	No Lists all Users with Limited Information
userRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const data = await User.findAll();
      const UserDatabase = data.map((u) => u.toSafeObject());
      res.json({ UserDatabase });
    } catch (e) {
      return console.error(e);
    }
  })
);

// GET/user/:id	No Finds Specific User Limited Information with Follower Information
userRouter.get("/:id", async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      { model: User, as: "followers" },
      { model: User, as: "following" },
    ],
  });

  const safeOutput = user.toSafeObject();
  safeOutput.followers = user.followers;
  safeOutput.following = user.following;

  if (user) {
    res.json(safeOutput);
  } else {
    res.send("Not Found.");
    next();
  }
});

module.exports = userRouter;
