import Table from "../models/Table.js";
import Product from "../models/Product.js";

export async function findAllTables() {
  try {
    const tablesFound = await Table.find();
    if (!tablesFound.length) return new Error("Tables not found"); // ToDo handle(error)

    return tablesFound;
  } catch (error) {
    console.error(error);
  }
}

export async function findOneTable({ _id }) {
  try {
    const tableFound = await Table.findById(_id);
    if (!tableFound) return new Error("Tables not found");

    return tableFound;
  } catch (error) {
    console.error(error);
  }
}

export async function findAllProducts() {
  try {
    const productsFound = await Product.find();
    if (!productsFound.length) return new Error("Tables not found");

    return productsFound;
  } catch (error) {
    console.error(error);
  }
}

export async function findOneProduct({ _id }) {
  try {
    const productFound = await Product.findById(_id);
    if (!productFound) return new Error("Product not found");

    return productFound;
  } catch (error) {
    console.error(error);
  }
}
