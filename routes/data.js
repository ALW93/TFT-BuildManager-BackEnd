const express = require("express");
const testRouter = express.Router();
const { asyncHandler } = require("./utility");
const { Champion, Trait } = require("../db/models");

// Get all Traits with their Champions
testRouter.get(
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
testRouter.get(
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
testRouter.get(
  "/:id/traits",
  asyncHandler(async (req, res) => {
    const traits = await champion.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: trait,
        as: "traits",
      },
    });
    res.send(traits);
  })
);

// Get Champions of Specific Trait
testRouter.get(
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

module.exports = testRouter;
