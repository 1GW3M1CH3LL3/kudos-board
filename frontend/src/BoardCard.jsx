function BoardCard(props) {
  const imgId = Math.floor(Math.random() * 100);
  return (
    <div className="card">
      <img src={`https://picsum.photos/id/${imgId}/200/300`} alt="" />
      <h3>{props.title}</h3>
      <p>{props.category}</p>
      <button>View Board</button>
      <button>Delete Board</button>
    </div>
  );
}

export default BoardCard;
