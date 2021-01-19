const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken, requireAuth } = require("../security");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utility");
const { User, Guide, Comment, Board, Bookmark } = require("../../db/models");
const { DateTime } = require("luxon");

//#region  Utilities

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
//#endregion

// *** Create New User ***
userRouter.post(
  "/",
  validateUsername,
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create(
      r({
        username: username,
        email: email,
        hashedPassword: hashedPassword,
        userIcon: "none",
        rank: "unranked",
        verified: false,
      })
    );
    await newUser.save();
    const token = getUserToken(newUser);

    if (newUser) {
      res.json({ user: newUser.toSafeObject(), token });
    }
  })
);

// *** Login and Create Session ***
userRouter.put(
  "/session",
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
    const { token, jti } = getUserToken(user);
    user.tokenId = jti;
    await user.save();
    res.cookie("token", token);
    res.json({ token, user: user.toSafeObject() });
  })
);

// *** Remove Session ***
userRouter.delete(
  "/session",
  requireAuth,
  asyncHandler(async (req, res) => {
    req.user.tokenId = null;
    await req.user.save();
    res.json({ message: "Logout Successful!" });
  })
);

// *** Returns List of Users Registered ***
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

// *** Return Data of Specific User ***
userRouter.get(
  "/id/:id",
  asyncHandler(async (req, res) => {
    await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["hashedPassword"],
      },
      include: [
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Following",
          attributes: ["id"],
        },
        {
          model: Guide,
          as: "Guides",
        },
        {
          model: Board,
          as: "Boards",
        },
        {
          model: Board,
          as: "Savers",
        },
        {
          model: Comment,
        },
      ],
    }).then((e) => {
      const resObj = Object.assign(
        {},
        {
          id: e.id,
          username: e.username,
          icon: e.userIcon,
          rank: e.rank,
          verified: e.verified,
          joined: new DateTime(e.createdAt).toLocaleString(DateTime.DATE_FULL),
          followerCount: e.Followers.length,
          followingCount: e.Following.length,
          guides: e.Guides.map((g) => {
            return Object.assign(
              {},
              { id: g.id, title: g.title, votes: e.votes }
            );
          }),
          boards: [...e.Boards, ...e.Savers].map((b) => {
            return Object.assign(
              {},
              {
                id: b.id,
                title: b.title,
                subtitle: b.subtitle,
                grid: b.grid,
                actives: b.actives,
              }
            );
          }),
          comments: e.Comments,
        }
      );
      res.status(200).json(resObj);
    });
  })
);

// *** Add a Bookmark ***
userRouter.post(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { guideId } = req.body;
    await Bookmark.create(r({ guideId, followerId: req.params.id }));
    res.status(201).send("Bookmark Added!");
  })
);

// *** Remove Bookmark ***
userRouter.delete(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { guideId } = req.body;
    await Bookmark.destroy({
      where: {
        guideId: guideId,
        followerId: req.params.id,
      },
    });
    res.status(201).send("Bookmark Successfully Removed!");
  })
);

module.exports = userRouter;
