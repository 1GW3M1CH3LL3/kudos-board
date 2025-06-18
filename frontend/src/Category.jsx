function Category(props) {
  const handleClick = (e) => {
    props.getBoard(e.target.value);

    // console.log(e.target.value);
  };
  const modalDisplay = () => {
    props.setIsClick(true);
  };
  return (
    <div>
      <div>
        <button value="all" onClick={handleClick}>
          All
        </button>
        <button value="recent" onClick={handleClick}>
          Recent
        </button>
        <button value="celebration" onClick={handleClick}>
          Celebration
        </button>
        <button value="thank you" onClick={handleClick}>
          Thank You
        </button>
        <button value="inspiration" onClick={handleClick}>
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
