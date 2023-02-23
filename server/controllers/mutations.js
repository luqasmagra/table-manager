import Table from "../models/Table.js";
import Product from "../models/Product.js";

export async function createTable({ name }) {
  try {
    const tableFound = await Table.findOne({ name });
    if (tableFound) {
      name = `${name} (a)`;
    }

    const table = new Table({ name });
    const savedTable = await table.save();

    return savedTable;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTable({ _id }) {
  try {
    const deletedTable = await Table.findByIdAndDelete(_id);
    if (!deletedTable) return new Error("Table not found");

    // Borro tambien los productos
    await Product.deleteMany({ tableId: _id });

    return deletedTable;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTable({ args }) {
  try {
    const { _id } = args;
    const updatedTable = await Table.findByIdAndUpdate(_id, args, {
      new: true, // Devuelve el nuevo objeto
    });
    if (!updatedTable) return new Error("Table not found");

    return updatedTable;
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct({ name, prize, quantity, tableId }) {
  try {
    const tableFound = await Table.findById(tableId);
    if (!tableFound) return new Error("Table not found");

    const product = new Product({ name, prize, quantity, tableId });
    const savedProduct = await product.save();

    return savedProduct;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct({ _id }) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(_id);
    if (!deletedProduct) return new Error("Table not found");

    return deletedProduct;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProduct({ args }) {
  try {
    const { _id } = args;
    const updatedProduct = await Product.findByIdAndUpdate(_id, args, {
      new: true,
    });
    if (!updatedProduct) return new Error("Product not found");

    return updatedProduct;
  } catch (error) {
    console.error(error);
  }
}
