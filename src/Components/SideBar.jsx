import { FaListUl } from "react-icons/fa";
import { createObjectQuery } from "../Helpers/helper";

function SideBar({ setQuery }) {
  const categoryHandler = (event) => {
    if (event.target.tagName !== "LI") return;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createObjectQuery(query, { category }));
  };
  return (
    <div>
      <div>
        <FaListUl />
        <p>Category</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's clothing</li>
        <li>Women's clothing</li>
      </ul>
    </div>
  );
}

export default SideBar;
