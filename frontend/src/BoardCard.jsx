import { useNavigate } from "react-router";
function BoardCard(props) {
  const imgId = Math.floor(Math.random() * 100);
  let navigate = useNavigate();
  const deleteBoard = async () => {
    try {
      props.setBoards((boards) =>
        boards.filter((board) => board.id !== props.id)
      );
      const response = await fetch(
        `http://localhost:4000/boarddetails/${props.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok()) {
        alert("failed to delete");
      }
    } catch (error) {}
  };

  return (
    <div className="board">
      <img src={`https://picsum.photos/id/${imgId}/200/300`} alt="" />
      <h3>{props.title}</h3>
      <p>{props.category}</p>
      <button
        className="view-board"
        onClick={() => {
          navigate(`/boarddetails/${props.id}`);
        }}
      >
        View Board
      </button>
      <button className="del-board" onClick={deleteBoard}>
        Delete Board
      </button>
    </div>
  );
}

export default BoardCard;
