import Table from "../models/Table.js";
import Product from "../models/Product.js";

//Funciones que se ejecutan a partir de los tipos de datos (typeDefs)
export const resolvers = {
  // Consultar datos
  Query: {
    tables: async () => await Table.find(),
    products: async () => await Product.find(),
  },

  // Crear datos
  Mutation: {
    createProduct: async (_, { name, prize, tableId }) => {
      const tableFound = await Table.findById(tableId);
      if (!tableFound) return new Error("Table not found"); // ToDo handle(error)

      const product = new Product({
        name,
        prize,
        tableId,
      });

      const savedProduct = await product.save();
      return savedProduct;
    },
    createTable: async (_, { name, prize }) => {
      const table = new Table({
        name,
        prize,
      });

      const savedTable = await table.save();
      return savedTable;
    },
  },
};
