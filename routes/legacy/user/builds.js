const express = require("express");
const buildRouter = express.Router();
const { requireAuth } = require("../../security");
const { asyncHandler, handleValidationErrors } = require("../../utility");
const {
  Build,
  Comment,
  Champion,
  Item,
  build_champion,
  build_champion_item,
} = require("../../../db/models");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

// POST/builds	Yes	Create Build
buildRouter.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title, playstyle, notes, authorId } = req.body;
    const build = await Build.create(r({ title, playstyle, notes, authorId }));
    await build.save();
    const findingId = await Build.findOne({
      where: {
        title: title,
      },
    });

    const buildId = findingId.id;

    const { team } = req.body;
    team.forEach(async (character) => {
      await build_champion.create(r({ ...character, buildId: buildId }));
      await build_champion.save();
    });

    res.send("Successfully Posted Build!");
  })
);

// PUT/builds/:id	Yes	Edit Build (WIP)
buildRouter.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const build = await Build.findByPk(req.params.id);

    if (!build) {
      next();
    } else {
      build = req.body;
      await build.save();
      res.send("Build Edited!");
    }
  })
);

// DELETE/builds/:id	Yes	Delete Build (WIP)
buildRouter.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const build = await Build.findByPk(req.params.id);
    const buildComments = await Comment.findAll({
      where: {
        buildId: req.params.id,
      },
    });

    if (!build) {
      next();
    } else {
      await build.destroy({
        where: {
          build,
        },
      });
      buildComments.map(async (c) => {
        await c.destroy({
          where: c,
        });
      });

      res.send("Build Deleted!");
    }
  })
);

// GET/builds/:id	No	Finds Specific Build (Includes Team & Custom Itemization)
buildRouter.get(
  "/id/:id",
  asyncHandler(async (req, res, next) => {
    const build = await Build.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Champion,
        as: "team",
        include: [
          {
            model: Item,
            as: "default_equipment",
          },
          {
            model: Item,
            as: "custom_equipment",
          },
        ],
      },
    });

    if (build) {
      res.send({ build });
    } else {
      next();
    }
  })
);

// GET/builds	No Lists all Builds in Database
buildRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const db_builds = await Build.findAll();
    res.status(200).json(db_builds);
  })
);

// GET	/builds/traits/:id	No	Retrieve all Builds that Contain a Certain Trait (WIP)

// GET/builds/meta No	Retrieve Meta Builds
buildRouter.get(
  "/meta",
  asyncHandler(async (req, res) => {
    const meta_builds = await Build.findAll({
      where: {
        authorId: 1,
      },
    });
    res.json(meta_builds);
  })
);

// GET/build/:id/comments	No	Read Comments for a Build
buildRouter.get(
  "/:id/comments",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      where: {
        buildId: req.params.id,
      },
    });
    res.json(comments);
  })
);

// POST/build/:id/comments	Yes	Create Comment
buildRouter.post(
  "/:id/comments",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { message, userId } = req.body;

    const comment = await Comment.create(
      r({ message, userId, buildId: req.params.id })
    );

    res.send("Comment Successfully Posted!");
  })
);

// PUT/build/:id/comments	Yes	Edit Comment
buildRouter.put(
  "/:id/comments",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { editMessage, commentId } = req.body;
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      next();
    } else {
      comment.message = editMessage;
      await comment.save();
      res.send(`Comment Edited:${editMessage}`);
    }
  })
);

// DELETE/build/:id/comments	Yes	Delete Comment
buildRouter.delete(
  "/:id/comments",
  asyncHandler(async (req, res) => {
    const { commentId } = req.body;
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      next();
    } else {
      await comment.destroy({
        where: {
          comment,
        },
      });
      res.send("Successfully Deleted!");
    }
  })
);

module.exports = buildRouter;
