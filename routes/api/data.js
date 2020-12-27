const express = require("express");
const apiRouter = express.Router();
const { asyncHandler } = require("../utility");
const { Champion, Trait, Item, Component } = require("../../db/models");
const { Op } = require("sequelize");

// GET	/api/champions	No	Retrieves all Champions in Database
apiRouter.get(
  "/champions",
  asyncHandler(async (req, res) => {
    const champions = await Champion.findAll();
    res.status(200).json(champions);
  })
);

// GET Filter Champions Cost
apiRouter.get(
  "/champions/filter/cost/:cost",
  asyncHandler(async (req, res) => {
    const champions = await Champion.findAll({
      where: {
        cost: req.params.cost,
      },
    });
    res.status(200).json(champions);
  })
);

// GET Filter Champions Trait
apiRouter.get(
  "/champions/filter/trait/:trait",
  asyncHandler(async (req, res) => {
    const champions = await Champion.findAll({
      where: {
        traits: { [Op.contains]: [req.params.trait] },
      },
    });
    res.status(200).json(champions);
  })
);

// GET Filter Champions Cost & Trait
apiRouter.get(
  "/champions/filter/cost/:cost/trait/:trait",
  asyncHandler(async (req, res) => {
    const champions = await Champion.findAll({
      where: {
        cost: req.params.cost,
        traits: { [Op.contains]: [req.params.trait] },
      },
    });
    res.status(200).json(champions);
  })
);

apiRouter.get(
  "/champions/filter/:trait",
  asyncHandler(async (req, res) => {
    const champions = await Champion.findAll({
      where: {
        traits: { [Op.contains]: [req.params.trait] },
      },
    });
    res.status(200).json(champions);
  })
);

// GET	/api/champions/:id	No	Retrieves specific Champion with Recommended Item Build & Trait Info
apiRouter.get(
  "/champions/:id",
  asyncHandler(async (req, res) => {
    const championInfo = await Champion.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Item,
          as: "default_equipment",
        },
      ],
    });
    res.status(200).json(championInfo);
  })
);

// GET	/api/traits	No	Retrieves all Traits in Database
apiRouter.get(
  "/traits",
  asyncHandler(async (req, res) => {
    const traits = await Trait.findAll();
    res.status(200).json(traits);
  })
);

// GET	/api/traits/:id	No	Retrieves all Champions in a Specific Trait
apiRouter.get(
  "/traits/:id",
  asyncHandler(async (req, res) => {
    const roster = await Trait.findAll({
      include: {
        model: Champion,
        as: "champions",
      },
    });
    res.json(roster);
  })
);

// GET	/api/items	No	Retrieves all Items in the Database
apiRouter.get(
  "/items",
  asyncHandler(async (req, res) => {
    const items = await Item.findAll();
    res.status(200).json(items);
  })
);

// GET	/api/components	No	Retrieves all Components in Database
apiRouter.get(
  "/components",
  asyncHandler(async (req, res) => {
    const components = await Component.findAll();
    res.status(200).json(components);
  })
);

module.exports = apiRouter;
