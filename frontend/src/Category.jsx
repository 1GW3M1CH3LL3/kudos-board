function Category(props) {
  const handleClick = (e) => {
    props.getBoard(e.target.value);
  };
  const modalDisplay = () => {
    props.setIsClick(true);
  };
  return (
    <div>
      <div className="category">
        <button className="category-type" value="all" onClick={handleClick}>
          All
        </button>
        <button className="category-type" value="recent" onClick={handleClick}>
          Recent
        </button>
        <button
          className="category-type"
          value="celebration"
          onClick={handleClick}
        >
          Celebration
        </button>
        <button
          className="category-type"
          value="thank you"
          onClick={handleClick}
        >
          Thank You
        </button>
        <button
          className="category-type"
          value="inspiration"
          onClick={handleClick}
        >
          Inspiration
        </button>
      </div>
      <div>
        <button onClick={modalDisplay}>Create New Board</button>
      </div>
    </div>
  );
}

export default Category;
