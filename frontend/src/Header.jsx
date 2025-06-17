import Search from "./Search";
import Category from "./Category";
function Header(props) {
  return (
    <>
      <Search getSearchResults={props.getSearchResults} />
      <Category
        boards={props.boards}
        setBoards={props.setBoards}
        getBoard={props.getBoard}
        isClick={props.isClick}
        setIsClick={props.setIsClick}
      />
    </>
  );
}
export default Header;
