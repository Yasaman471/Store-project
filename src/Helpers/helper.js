const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search),
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createObjectQuery = (currentQuery, newQuery) => {
  const updateQuery = { ...currentQuery, ...newQuery };

  if (updateQuery.category === "all") {
    delete updateQuery.category;
  }

  if (updateQuery.search === "") {
    delete updateQuery.search;
  }

  return updateQuery;
};

export { shortenText, searchProducts, filterProducts, createObjectQuery };
