import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Card(props) {
  //   let navigate = useNavigate();
  const [upvotecount, setUpvotecount] = useState(0);
  const deleteCard = async () => {
    console.log("deleting");
    try {
      props.setCards((cards) => cards.filter((card) => card.id !== props.id));
      console.log(props);
      const response = await fetch(`http://localhost:4000/${props.id}`, {
        method: "DELETE",
      });
      console.log(response);
      if (!response.ok()) {
        alert("failed to delete");
      }
    } catch (error) {}
  };

  return (
    <div className="card">
      <h3>{props.cardTitle}</h3>
      <p>{props.description}</p>
      <img src={props.gifUrl} height="100px" width="160px" alt="" />
      <p>{props.owner}</p>
      <button onClick={() => setUpvotecount(() => upvotecount + 1)}>
        Upvote {upvotecount}
      </button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}
export default Card;
