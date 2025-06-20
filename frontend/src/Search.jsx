import { useState } from "react";
import { useEffect } from "react";

function Search(props) {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    props.getSearchResults(searchVal);
  }, [searchVal]);

  const clear = () => {
    setSearchVal(() => "");
  };

  const handleSearch = (e) => {
    props.getSearchResults(searchVal);
  };

  return (
    <div>
      <form action="search">
        <input
          className="search-form"
          value={searchVal}
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
        <button className="search" type="button" onClick={handleSearch}>
          Search
        </button>
        <button className="clear" type="button" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Search;
