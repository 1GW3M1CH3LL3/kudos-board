import { use, useState } from "react";

function CreateCard(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newGif, setNewGif] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [gifResults, setGifResults] = useState([]);

  async function handleGifSearch() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=${apiKey}&limit=6`
    );
    const data = await response.json();
    setGifResults(data.data);
  }

  const close = () => {
    props.setCreateCard(false);
  };

  const createCard = async () => {
    let newData = {
      boardId: props.id,
      title: newTitle,
      description: newDescription,
      gif: props.gifUrl,
      owner: newOwner,
    };
    if (newTitle && newDescription && newGif) {
      const response = await fetch(`http://localhost:4000/${props.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      props.setCreateCard(false);
      const res = await response.json();

      props.setCards([...props.cards, res]);
    } else {
      alert("FILL IN THE REQUIRED FORMS");
    }
    props.setGifUrl("");
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <i className="fa-solid fa-xmark" onClick={close}></i>
        <h3>Create a New Card</h3>
        <form action="" className="create-card">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter card title"
            required
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Enter card description"
            required
          />
          <input
            type="text"
            value={newGif}
            onChange={(e) => setNewGif(e.target.value)}
            placeholder="Search GIFs.."
            required
          />
          <button
            className="create-card-but"
            type="button"
            onClick={() => handleGifSearch()}
          >
            Search
          </button>
          <div className="gif-grid">
            <div className="gif">
              {gifResults.map((gif) => (
                <img
                  onClick={() => props.setGifUrl(gif.images.fixed_height.url)}
                  width="60px"
                  height="50px"
                  key={gif.id}
                  src={gif.images.fixed_height.url}
                  alt="gif"
                />
              ))}
            </div>
          </div>
          <input
            value={props.gifUrl}
            type="text"
            placeholder="Enter GIF URL"
            required
          />
          <button className="create-card-but" type="button">
            Copy GIF URL
          </button>
          <input
            type="text"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            placeholder="Enter owner (optional)"
          />
          <button
            className="create-card-but"
            type="button"
            onClick={createCard}
          >
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
