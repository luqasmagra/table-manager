import Table from "../models/Table.js";
import Product from "../models/Product.js";

//Funciones que se ejecutan a partir de los tipos de datos (typeDefs)
export const resolvers = {
  // CONSULTA DE DATOS
  Query: {
    tables: async () => {
      const tablesFound = await Table.find();
      if (!tablesFound.length) return new Error("Tables not found"); // ToDo handle(error)

      return tablesFound;
    },
    table: async (_, { _id }) => {
      const tableFound = await Table.findById(_id);
      if (!tableFound) return new Error("Tables not found");

      return tableFound;
    },

    products: async () => {
      const productsFound = await Product.find();
      if (!productsFound.length) return new Error("Tables not found");

      return productsFound;
    },
    product: async (_, { _id }) => {
      const productFound = await Product.findById(_id);
      if (!productFound) return new Error("Product not found");

      return productFound;
    },
  },

  // CREACION Y ACTUALIZACION DE DATOS
  Mutation: {
    createTable: async (_, { name, prize }) => {
      const table = new Table({ name, prize });
      const savedTable = await table.save();

      return savedTable;
    },
    deleteTable: async (_, { _id }) => {
      const deletedTable = await Table.findByIdAndDelete(_id);
      if (!deletedTable) return new Error("Project not found");

      return deletedTable;
    },
    updateTable: async (_, args) => {
      const updatedTable = await Table.findByIdAndUpdate(args._id, args, {
        new: true, // Me devuelve el nuevo objeto
      });
      if (!updatedTable) return new Error("Table not found");

      return updatedTable;
    },

    createProduct: async (_, { name, prize, quantity, tableId }) => {
      const tableFound = await Table.findById(tableId);
      if (!tableFound) return new Error("Table not found");

      const product = new Product({ name, prize, quantity, tableId });
      const savedProduct = await product.save();

      return savedProduct;
    },
    deleteProduct: async (_, { _id }) => {
      const deletedProduct = await Product.findByIdAndDelete(_id);
      if (!deletedProduct) return new Error("Table not found");

      return deletedProduct;
    },
    updateProduct: async (_, args) => {
      const updatedProduct = await Product.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedProduct) return new Error("Product not found");

      return updatedProduct;
    },
  },
};
