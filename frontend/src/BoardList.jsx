import { useState } from "react";
import BoardCard from "./BoardCard";
import { useEffect } from "react";

function BoardList(props) {
  return (
    <div className="board-list">
      {props.boards.lenght === 0 ? (
        <h1>Welcome! Start by creating your first board.</h1>
      ) : (
        props.boards.map((board) => (
          <BoardCard
            className="card"
            key={board.id}
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
