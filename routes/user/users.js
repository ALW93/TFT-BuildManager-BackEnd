const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const { asyncHandler, handleValidationErrors } = require("../utility");
const { User } = require("../../db/models");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

// Create a New User
userRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create(r({ username, email, hashedPassword }));
      await user.save();
      res.json({ user: user.toSafeObject() });
    } catch (e) {
      return console.error(e);
    }
  })
);

// Read with Safe Object
userRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const data = await User.findAll();
    const UserDatabase = data.map((u) => u.toSafeObject());
    res.json({ UserDatabase });
  })
);

// Read for a User & Their Builds
userRouter.get("/:id", async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
    include: ("Builds", "Comments"),
  });

  if (user) {
    res.send({ user });
  } else {
    res.send("Not Found.");
    next();
  }
});

module.exports = userRouter;
