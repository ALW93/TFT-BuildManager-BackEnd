const express = require("express");
const boardRouter = express.Router();
const { requireAuth } = require("../security");
const { asyncHandler } = require("../utility");
const { Board, User } = require("../../db/models");

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

// *** Retrieve all Builds ***
boardRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Board.findAll({
      include: {
        model: User,
        attributes: {
          exclude: ["hashedPassword"],
        },
      },
    });
    res.status(200).json(data);
  })
);

// *** Retrieve all Editor Builds ***
boardRouter.get(
  "/meta",
  asyncHandler(async (req, res) => {
    const data = await Board.findAll({
      where: {
        authorId: 1,
      },
      include: {
        model: User,
        as: "Author",
        attributes: {
          exclude: ["hashedPassword"],
        },
      },
    });
    res.status(200).json(data);
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

      include: {
        model: User,
        as: "Author",
        attributes: {
          exclude: ["hashedPassword"],
        },
      },
    });
    res.status(200).json(data);
  })
);

module.exports = boardRouter;
