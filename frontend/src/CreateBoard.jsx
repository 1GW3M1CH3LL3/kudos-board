import React from "react";
import { boards_data } from "./App";
import { useState } from "react";
import Category from "./Category";

function CreateBoard(props) {
  const close = () => {
    props.setIsClick(false);
  };
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const createBoard = () => {
    let newData = {
      id: String(boards_data.length + 1),
      title: newTitle,
      category: newCategory,
    };
    // img:
    // author: newAuthor,
    props.setIsClick(false);
    boards_data.push(newData);
    props.setBoards(boards_data);
    console.log(boards_data);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <i className="fa-solid fa-xmark" onClick={close}></i>
        <form action="" className="create-board">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            name=""
            id=""
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor="">Category:</label>
          <select
            name=""
            id=""
            onChange={(e) => setNewCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Celebration">Celebration</option>
            <option value="Thank You">Thank You</option>
            <option value="Inspiration">Inspiration</option>
          </select>
          <label htmlFor="">Author:</label>
          <input
            type="text"
            name=""
            id=""
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button type="button" onClick={createBoard}>
            Create New Board
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreateBoard;
