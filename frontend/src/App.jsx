import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import BoardList from "./BoardList";
import { useEffect } from "react";
import CreateBoard from "./CreateBoard";
import BoardDetail from "./BoardDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [boards, setBoards] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [createCard, setCreateCard] = useState(false);
  const getSearchResults = async (value) => {
    // let items = [...boards];
    await fetchBoards();
    console.log(value);
    setBoards((boards) =>
      boards.filter((board) =>
        board.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  async function fetchBoards() {
    //const url = `https://kudos-board-34wu.onrender.com`;
    const url = ` http://localhost:4000`;
    const response = await fetch(url);
    const data = await response.json();
    setBoards(() => data);
  }
  useEffect(() => {
    fetchBoards();
  }, []);
  const getBoard = async (value) => {
    //
    //let items = [...boards];
    //console.log("check items", items);
    if (value === "all") {
      await fetchBoards();
    } else if (value === "recent") {
      await fetchBoards();
      /*let items = [...boards];

      items = items.slice(items.length - 6, items.length);*/
      console.log("recent");
      // console.log(items);
      setBoards((boards) => boards.slice(boards.length - 6, boards.length));
    } else {
      await fetchBoards();
      setBoards((boards) =>
        boards.filter(
          (board) => board.category.toLowerCase() === value.toLowerCase()
        )
      );
    }
    // console.log(boards);
    // console.log(items);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <Header
                className="header-container"
                boards={boards}
                setBoards={setBoards}
                getBoard={getBoard}
                getSearchResults={getSearchResults}
                isClick={isClick}
                setIsClick={setIsClick}
              ></Header>
              <BoardList boards={boards} setBoards={setBoards}></BoardList>
              {isClick === true && (
                <CreateBoard
                  setIsClick={setIsClick}
                  isClick={isClick}
                  boards={boards}
                  setBoards={setBoards}
                />
              )}
            </>
          }
        />
        <Route
          path="/boarddetails/:id"
          element={
            <BoardDetail
              setCreateCard={setCreateCard}
              createCard={createCard}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
