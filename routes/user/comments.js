const express = require("express");
const commentRouter = express.Router();
const buildRouter = require("./builds");
const { Comment } = require("../../db/models");
const { asyncHandler, handleValidationErrors } = require("../utility");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

// Create a Comment for a Build
buildRouter.post(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { body, userId } = req.body;

    // userId: req.user.id (Set Up when Login Works)

    const comment = await Comment.create(
      r({ body, userId, buildId: req.params.id })
    );

    res.send({ comment });
  })
);

// Read all Comments in DB
commentRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();

    res.json({ comments });
  })
);

// Update Edit a Comment
commentRouter.put(
  "/",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.body.id);
    if (!comment) {
      next();
    } else {
      comment.body = req.body.edit;
      await comment.save();
      res.send("Comment Edited!");
    }
  })
);

// Delete a Comment
commentRouter.delete(
  "/",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.body.id);

    if (!comment) {
      next();
    } else {
      await comment.destroy({
        where: {
          comment,
        },
      });
      res.send("Comment Deleted!");
    }
  })
);

module.exports = commentRouter;
