import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Card(props) {
  //   let navigate = useNavigate();
  const [upvotecount, setUpvotecount] = useState(props.upvote);
  const addUpVote = async () => {
    console.log("isu");
    const response = await fetch(`http://localhost:4000/${props.id}`, {
      method: "PUT",
    });
    const res = await response.json();
    setUpvotecount(res.upvote);
  };
  const deleteCard = async () => {
    try {
      props.setCards((cards) => cards.filter((card) => card.id !== props.id));

      const response = await fetch(`http://localhost:4000/${props.id}`, {
        method: "DELETE",
      });

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
      <button onClick={addUpVote}>Upvote {upvotecount}</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}
export default Card;
