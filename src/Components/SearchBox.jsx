import { ImSearch } from "react-icons/im";

import { createObjectQuery } from "../Helpers/helper";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const SearchHandler = () => {
    setQuery((query) => createObjectQuery(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
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
