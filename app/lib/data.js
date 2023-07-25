let products_fromDB = [
  {
    id: 1,
    title: "Product - 1",
    description: "Test Description",
    date: Date.now().toString(),
  },
];

export const getproducts = () => products_fromDB;

export const addproducts = (products) => {
  products_fromDB.push(products);
};

export const deleteproducts = (id) => {
  const productToDel = products_fromDB.filter((product) => product.id !== id);
};

export const updateproducts = (id, title, description) => {
  const productUpdate = products_fromDB.find((product) => product.id == id);
  if (productUpdate) {
    productUpdate.id = id;
    productUpdate.title = title;
    productUpdate.description = description;
  } else {
    throw new Error("No products found ");
  }
};
