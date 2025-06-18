const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", async (req, res) => {
  const boards = await prisma.board.findMany();
  res.json(boards);
});

app.post("/", async (req, res) => {
  const { title, category } = req.body;
  const newBoard = await prisma.board.create({
    data: {
      title,
      category,
      //   card,
    },
  });
  res.json(newBoard);
});

app.get("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  });
  res.json(board);
});

app.delete("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const deletedBoard = await prisma.board.delete({
    where: { id: boardId },
  });
  res.json(deletedBoard);
});
