import { ImSearch } from "react-icons/im";
import { createObjectQuery } from "../Helpers/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const SearchHandler = () => {
    setQuery((query) => createObjectQuery(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={SearchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
