import { useState } from "react";
import { useEffect } from "react";
function Search(props) {
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    props.getSearchResults(searchVal);
  }, [searchVal]);
  const clear = () => {
    setSearchVal("");
    console.log(searchVal);
  };
  const handleSearch = (e) => {
    props.getSearchResults(searchVal);
  };
  return (
    <div>
      <form action="search">
        <input
          value={searchVal}
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
        <button type="button" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Search;
