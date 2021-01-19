const express = require("express");
const boardRouter = express.Router();
const { requireAuth } = require("../security");
const { asyncHandler } = require("../utility");
const { Board, User, Guide } = require("../../db/models");
const { Op } = require("sequelize");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

// *** POST New Board ***
boardRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const newBoard = await Board.create(r(req.body));
    await newBoard.save();
    res.status(201).json({ newBoard });
  })
);

// *** Retrieve all Boards ***
boardRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Board.findAll({
      include: {
        model: User,
        as: "Creator",
        attributes: {
          exclude: ["hashedPassword"],
        },
      },
    });
    res.status(200).json(data);
  })
);

// *** Retrieve all Community Boards ***

boardRouter.get(
  "/community",
  asyncHandler(async (req, res) => {
    await Board.findAll({
      where: {
        [Op.not]: { authorId: 1 },
      },
      include: [
        {
          model: Guide,
          as: "Featured",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Creator",
          attributes: {
            exclude: "hashedPassword",
          },
        },
        {
          model: User,
          as: "Saved_By",
          attributes: ["id"],
        },
      ],
    }).then((boards) => {
      const resObj = {};
      boards.forEach((board) => {
        resObj[board.id] = {
          title: board.title,
          subtitle: board.subtitle,
          grid: board.grid,
          actives: board.actives,
          author: board.Creator.username,
          feature_count: board.Featured.length,
          save_count: board.Saved_By.length,
          cover: board.grid.filter((e) => e.items && e.items.length === 3),
        };
      });

      res.status(200).json(resObj);
    });
  })
);

// *** Retrieve all Editor Boards ***
boardRouter.get(
  "/meta",
  asyncHandler(async (req, res) => {
    await Board.findAll({
      where: {
        authorId: 1,
      },
      include: [
        {
          model: Guide,
          as: "Featured",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Creator",
          attributes: {
            exclude: "hashedPassword",
          },
        },
        {
          model: User,
          as: "Saved_By",
          attributes: ["id"],
        },
      ],
    }).then((boards) => {
      const resObj = {};
      boards.forEach((board) => {
        resObj[board.id] = {
          title: board.title,
          subtitle: board.subtitle,
          grid: board.grid,
          actives: board.actives,
          author: board.Creator.username,
          feature_count: board.Featured.length,
          save_count: board.Saved_By.length,
          cover: board.grid.filter((e) => e.items && e.items.length === 3),
        };
      });
      res.status(200).json(resObj);
    });
  })
);

// *** GET a specific Board via ID || Including Author Info ***
boardRouter.get(
  "/id/:id",
  asyncHandler(async (req, res) => {
    const data = await Board.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: User,
          as: "Creator",
          attributes: {
            exclude: ["hashedPassword"],
          },
        },
        {
          model: Guide,
          as: "Featured",
          attributes: {
            exclude: ["content"],
          },
          include: {
            model: User,
            as: "Author",
            attributes: {
              exclude: ["hashedPassword"],
            },
          },
        },
      ],
    });
    res.status(200).json(data);
  })
);

module.exports = boardRouter;
