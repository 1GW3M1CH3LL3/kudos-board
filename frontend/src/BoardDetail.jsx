import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CreateCard from "./CreateCard";
import Card from "./Cards";
function BoardDetail(props) {
  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();
  const cardForm = () => {
    props.setCreateCard(true);
  };
  useEffect(() => {
    fetchCards();
    console.log("hi");
  }, [id]);
  let fetchCards = async () => {
    //const url = `https://kudos-board-34wu.onrender.com`;
    const url = `http://localhost:4000/${id}`;
    console.log(id);
    console.log("1");
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log("3");
      console.log("gotten to printing data");
      console.log("4");
      console.log(data);
      console.log("5");
      setBoard(() => data);
      setCards(() => data.card);
      console.log(cards);
      console.log("6");
    } catch (error) {
      console.error(error);
      console.log("7");
    }
  };
  useEffect(() => {
    console.log("he");
  }, []);
  useEffect(() => {
    console.log(cards);
    console.log(id);
    console.log("use effect for printing cards ran");
  }, [cards]);
  return (
    <>
      <div>
        {props.createCard === true && (
          <CreateCard
            cards={cards}
            setCards={setCards}
            id={id}
            setCreateCard={props.setCreateCard}
            createCard={props.createCard}
          />
        )}
        <i
          id="back-icon"
          className="fa-solid fa-arrow-left"
          onClick={() => {
            navigate(`/`);
          }}
        ></i>
        <h1>{board.title}</h1>
        {console.log(cards)}
        <button onClick={cardForm}>Create a Card</button>
        {console.log(cards)}

        {/* {if(cards){}} */}
        <div className="card-list">
          {cards.map((car) => (
            <Card
              cards={cards}
              setCards={setCards}
              id={car.id}
              cardTitle={car.title}
              description={car.description}
              owner={car.owner}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default BoardDetail;
