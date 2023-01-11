const Product = require("../models/productModel");
const { getPostData } = require("../utils");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
//@desc gets single product
//@route GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// async function createProduct(req, res) {
//   try {
//     const product = {
//       title: "test product",
//       description: "This is a new product",
//       price: 100,
//     };
//     const newProduct = await Product.create(product);
//     res.writeHead(201, { "content-type": "application/json" });
//     res.end(JSON.stringify(newProduct));
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function createProduct(req, res) {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", async () => {
//     const { title, description, price } = JSON.parse(body);
//     const product = { title, description, price };
//     const newProduct = await Product.create(product);
//     res.writeHead(201, { "content-type": "application/json" });
//     res.end(JSON.stringify(newProduct));
//   });
// }

async function createProduct(req, res) {
  const body = await getPostData(req);
  const { title, description, price } = JSON.parse(body);
  const product = { title, description, price };
  const newProduct = await Product.create(product);
  res.writeHead(201, { "content-type": "application/json" });
  res.end(JSON.stringify(newProduct));
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
