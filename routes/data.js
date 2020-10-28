const express = require("express");
const apiRouter = express.Router();
const { asyncHandler } = require("./utility");
const { Champion, Trait } = require("../db/models");

// Get all Traits with their Champions
apiRouter.get(
  "/traits",
  asyncHandler(async (req, res) => {
    const roster = await Trait.findAll({
      include: {
        model: Champion,
        as: "champions",
      },
    });
    res.send(roster);
  })
);

// Get All Champions with Their Traits
apiRouter.get(
  "/champions",
  asyncHandler(async (req, res) => {
    const traits = await Champion.findAll({
      include: {
        model: Trait,
        as: "traits",
      },
    });
    res.send(traits);
  })
);

// Get Traits of Specific Champion
apiRouter.get(
  "/:id/traits",
  asyncHandler(async (req, res) => {
    const traits = await Champion.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: Trait,
        as: "traits",
      },
    });
    res.send(traits);
  })
);

// Get Champions of Specific Trait
apiRouter.get(
  "/:id/champions",
  asyncHandler(async (req, res) => {
    const champions = await Trait.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: Champion,
        as: "champions",
      },
    });
    res.send(champions);
  })
);

module.exports = apiRouter;
