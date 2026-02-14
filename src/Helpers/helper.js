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

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (products) => {
  const totalQuantity = products.reduce(
    (counter, product) => counter + product.quantity,
    0,
  );
  const totalPrice = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { totalQuantity, totalPrice };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

const calculateItemTotalPrice = (price, quantity) => {
  const totalPrice = price * quantity;
  return totalPrice;
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createObjectQuery,
  getInitialQuery,
  sumProducts,
  productQuantity,
  calculateItemTotalPrice,
};
