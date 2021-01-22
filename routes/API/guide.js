const express = require("express");
const guideRouter = express.Router();
const { requireAuth } = require("../security");
const { asyncHandler } = require("../utility");
const { Board, User, Guide, Comment, Guide_Board } = require("../../db/models");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

// *** POST new Guide ***
guideRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { guide, title, id, boards } = req.body;
    const newGuide = await Guide.create(
      r({ title: title, votes: 0, authorId: id, content: guide })
    );
    boards.map(async (board, idx) => {
      let boardId;
      if (!board.id) {
        var newBoard = await Board.create(r(board));
        boardId = newBoard.dataValues.id;
      } else {
        boardId = board.id;
      }
      await Guide_Board.create(
        r({
          guideId: newGuide.dataValues.id,
          boardId: boardId,
          position: idx,
        })
      );
    });
    console.log("****** NEW GUIDE", newGuide.dataValues);
    res.status(200).json(newGuide);
  })
);

// *** GET a specific Guide via ID ***
guideRouter.get(
  "/id/:id",
  asyncHandler(async (req, res) => {
    const data = await Guide.findOne({
      where: {
        id: req.params.id,
      },
      order: [[{ model: Guide_Board }, "position", "asc"]],
      include: [
        {
          model: User,
          as: "Author",
          attributes: {
            exclude: ["hashedPassword"],
          },
        },
        {
          model: User,
          as: "Bookmarkers",
          attributes: ["id"],
        },
        {
          model: Comment,
          attributes: {
            exclude: ["hashedPassword"],
          },
        },
        {
          model: Guide_Board,
          attributes: ["position"],
          include: {
            model: Board,
          },
        },
      ],
    });
    res.status(200).json(data);
  })
);

module.exports = guideRouter;
