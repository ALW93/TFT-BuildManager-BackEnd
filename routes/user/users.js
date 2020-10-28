const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken, requireAuth } = require("../security");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utility");
const { User, Build, Comment, Bookmark } = require("../../db/models");

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
  handleValidationErrors,
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
userRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
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
  })
);

// GET/user/:id/builds No Find Specific User's Builds
userRouter.get(
  "/:id/builds",
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: "Builds",
    });

    if (user) {
      res.json({ builds: user.Builds });
    } else {
      res.send("No Builds Found.");
      next();
    }
  })
);

// GET/user/:id/comments	No	Find Specific User's Posted Comments
userRouter.get(
  "/:id/comments",
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: "Comments",
    });

    if (user) {
      res.json(user.Comments);
    } else {
      res.send("User has not posted any comments yet!");
      next();
    }
  })
);

// GET/user/:id/bookmarks	No	Find Specific User's Bookmarks
userRouter.get(
  "/:id/bookmarks",
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Build, as: "bookmarks" }],
    });

    if (user) {
      res.json({ bookmarks: user.bookmarks });
    } else {
      res.send("No Bookmarks Found.");
      next();
    }
  })
);

// POST/user/:id/bookmarks	Yes	Create Bookmark
userRouter.post(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { buildId } = req.body;
    await Bookmark.create(r({ buildId, followerId: req.params.id }));
    res.status(201).send("New Bookmark Successfully Added!");
  })
);

// DELETE/user/:id/bookmarks	Yes	Delete Bookmark
userRouter.delete(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { buildId } = req.body;
    const removeBookmark = await Bookmark.findOne({
      where: {
        buildId: buildId,
        followerId: req.params.id,
      },
    });
    await removeBookmark.destroy({
      where: {
        removeBookmark,
      },
    });
    res.status(201).send("Bookmark Successfully Removed!");
  })
);

module.exports = userRouter;
