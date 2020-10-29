const express = require("express");
const apiRouter = express.Router();
const { asyncHandler } = require("../utility");
const { Champion, Trait, Item, Component } = require("../../db/models");

// GET	/api/champions	No	Retrieves all Champions in Database
apiRouter.get("/champions", asyncHandler(async (req, res) => {
  const champions = await Champion.findAll();
  res.status(200).json(champions);
}));

// GET	/api/champions/:id	No	Retrieves specific Champion with Recommended Item Build & Trait Info
apiRouter.get(
  "/champions/:id",
  asyncHandler(async (req, res) => {
    const championInfo = await Champion.findAll({
      where: {
        id: req.params.id,
      },
      include: [{
        model: Trait,
        as: "traits",
      },
      {
        model: Item,
        as: "default_equipment"
      }],
    });
    res.status(200).json(championInfo);
  })
);

// GET	/api/traits	No	Retrieves all Traits in Database
apiRouter.get("/traits", asyncHandler(async (req, res) => {
  const traits = await Trait.findAll();
  res.status(200).json(traits);
}));

// GET	/api/traits/:id	No	Retrieves all Champions in a Specific Trait

// GET	/api/items	No	Retrieves all Items in the Database
apiRouter.get("/items", asyncHandler(async (req, res) => {
  const items = await Item.findAll();
  res.status(200).json(items);
}));

// GET	/api/items/:id	No	Retrieves Specific item with Recommended Champion Users

// GET	/api/components	No	Retrieves all Components in Database
apiRouter.get("/components", asyncHandler(async (req, res) => {
  const components = await Component.findAll();
  res.status(200).json(components);
}));

// GET	/api/components	No	Retrieves Specific Component with Items it builds into



module.exports = apiRouter;
