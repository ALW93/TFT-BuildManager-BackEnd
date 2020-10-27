const express = require("express");
const testRouter = express.Router();
const { asyncHandler } = require("./utility");
const { champion, trait, origin } = require("../db/models");

// Get all Traits with their Champions
testRouter.get(
  "/traits",
  asyncHandler(async (req, res) => {
    const roster = await trait.findAll({
      include: {
        model: champion,
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
    const traits = await champion.findAll({
      include: {
        model: trait,
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
    const champions = await trait.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: champion,
        as: "champions",
      },
    });
    res.send(champions);
  })
);

module.exports = testRouter;
