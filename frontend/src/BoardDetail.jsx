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
  }, [id]);
  let fetchCards = async () => {
    const url = `http://localhost:4000/${id}`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      setBoard(() => data);
      setCards(() => data.card);
    } catch (error) {
      console.error(error);
    }
  };

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
            gifUrl={props.gifUrl}
            setGifUrl={props.setGifUrl}
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

        <button onClick={cardForm}>Create a Card</button>

        {/* {if(cards){}} */}
        <div className="card-list">
          {cards.map((car) => (
            <Card
              className="card"
              cards={cards}
              setCards={setCards}
              id={car.id}
              cardTitle={car.title}
              description={car.description}
              // cardImg={car.img}
              owner={car.owner}
              gifUrl={car.gif}
              setGifUrl={props.setGifUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default BoardDetail;
