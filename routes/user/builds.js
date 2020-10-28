const express = require("express");
const buildRouter = express.Router();
const { asyncHandler, handleValidationErrors } = require("../utility");
const { Build, Comment } = require("../../db/models");
const { Op } = require("sequelize");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

buildRouter.get(
  "/traits",
  asyncHandler(async (req, res) => {
    try {
      const { search } = req.body;
      const traitBuild = await Build.findAll({
        where: {
          traits: { [Op.contains]: [search] },
        },
      });
      res.send(traitBuild);
    } catch (e) {
      console.error(e);
    }
  })
);

// Create
buildRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const build = await Build.create(r(req.body));
      await build.save();
      res.send(build);
    } catch (e) {
      console.error(e);
    }
  })
);

// Read
buildRouter.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const build = await Build.findOne({
      where: {
        id: req.params.id,
      },
      // include: "Comments",
    });

    if (build) {
      res.send({ build });
    } else {
      next();
    }
  })
);

// Update
buildRouter.put(
  "/:id",
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

// Delete
buildRouter.delete(
  "/:id",
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

module.exports = buildRouter;
