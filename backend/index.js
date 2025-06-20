const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", async (req, res) => {
  const boards = await prisma.board.findMany();
  res.json(boards);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const { title, category } = req.body;
  try {
    const newBoard = await prisma.board.create({
      data: {
        title,
        category,
        //   card,
      },
    });
    res.json(newBoard);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/:boardId", async (req, res) => {
  console.log(req.body);
  try {
    const { boardId, title, description, gif, owner } = req.body;

    const newCard = await prisma.card.create({
      data: {
        board: { connect: { id: Number(boardId) } },
        title,
        description,
        gif,
        owner,
      },
    });
    res.json(newCard);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
    include: { card: true },
  });
  res.json(board);
});
// app.get("/boarddetails/:boardId", async (req, res) => {
//   const boardId = parseInt(req.params.boardId);
//   console.log(boardId);
//   const board = await prisma.board.findUnique({
//     where: {
//       id: boardId,
//     },
//   });
//   res.json(board.card);
// });
app.delete("/boarddetails/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const deletedBoard = await prisma.board.delete({
    where: { id: boardId },
  });
  res.json(deletedBoard);
});

app.delete("/:cardId", async (req, res) => {
  const cardId = parseInt(req.params.cardId);
  console.log(cardId);
  const deletedCard = await prisma.card.delete({
    where: { id: cardId },
  });
  res.json(deletedCard);
});

app.put("/:cardId", async (req, res) => {
  const cardId = parseInt(req.params.cardId);
  try {
    const updatedUpVote = await prisma.card.update({
      where: {
        id: cardId,
      },

      data: {
        upvote: { increment: 1 },
      },
    });
    res.json(updatedUpVote);
  } catch (error) {
    console.log(error);
  }
});
