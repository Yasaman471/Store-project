import { FaListUl } from "react-icons/fa";

import { createObjectQuery } from "../Helpers/helper";
import { categories } from "../Constants/list.js";

import styles from "./SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    if (event.target.tagName !== "LI") return;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createObjectQuery(query, { category }));
  };
  return (
    <div className={styles.sideBar}>
      <div>
        <FaListUl />
        <p>Category</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
