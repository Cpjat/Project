const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 49999,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Book",
    price: 299,
    category: "Stationery",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ error: "not valid" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
    category,
  };

  products.push(newProduct);
  console.log("New product added:", newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const productIndex = products.findIndex(p => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found." });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...updatedData,
    id: products[productIndex].id,
  };

  console.log(`Updated product ID ${id}:`, products[productIndex]);
  res.json(products[productIndex]);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex(p => p.id === parseInt(id));

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found." });
  }

  const deletedProduct = products.splice(productIndex, 1);
  console.log(`Deleted product ID ${id}`);
  res.json({ message: `Product ID ${id} deleted.`, product: deletedProduct });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
