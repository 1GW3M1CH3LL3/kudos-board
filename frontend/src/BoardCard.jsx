function BoardCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.category}</p>
      <button>View Board</button>
      <button>Delete Board</button>
    </div>
  );
}

export default BoardCard;
