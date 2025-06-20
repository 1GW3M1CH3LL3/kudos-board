import { useState } from "react";
import BoardCard from "./BoardCard";
import { useEffect } from "react";

function BoardList(props) {
  return (
    <div className="board-list">
      {props.boards.length === 0 ? (
        <h1>Welcome! Start by creating your first board.</h1>
      ) : (
        props.boards.map((board) => (
          <BoardCard
            boards={props.boards}
            setBoards={props.setBoards}
            className="card"
            id={board.id}
            title={board.title}
            category={board.category}
            image={board.image}
          />
        ))
      )}
    </div>
  );
}

export default BoardList;
