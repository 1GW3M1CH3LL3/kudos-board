import { use, useState } from "react";

function CreateCard(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newGif, setNewGif] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [gifResults, setGifResults] = useState([]);
  async function handleGifSearch() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${newGif}&apiKey=${apiKey}&limit=6`
    );
    const data = await res.json;
    setGifResults("1", data.data);
    console.log(data.data);
  }
  handleGifSearch();
  const createCard = async () => {
    console.log("isu");
    let newData = {
      boardId: props.id,
      title: newTitle,
      description: newDescription,
      gif: newGif,
      owner: newOwner,
    };
    if (newTitle && newDescription && newGif && newOwner) {
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
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create a New Card</h3>
        <form action="create-card">
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
          <button type="button">Search</button>
          <input type="text" placeholder="Enter GIF URL" required />
          <button type="button">Copy GIF URL</button>
          <input
            type="text"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            placeholder="Enter owner (optional)"
          />
          <button type="button" onClick={createCard}>
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
