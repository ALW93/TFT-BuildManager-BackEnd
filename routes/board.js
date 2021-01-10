const express = require("express");
const boardRouter = express.Router();
const { requireAuth } = require("./security");
const { asyncHandler } = require("./utility");
const { Board } = require("../db/models");

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

module.exports = boardRouter;
