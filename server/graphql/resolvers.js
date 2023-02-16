import {
  createProduct,
  createTable,
  deleteProduct,
  deleteTable,
  updateProduct,
} from "../controllers/mutations.js";
import {
  findOneTable,
  findAllTables,
  findAllProducts,
  findOneProduct,
} from "../controllers/queries.js";

//Funciones que se ejecutan a partir de los tipos de datos (typeDefs)
export const resolvers = {
  // CONSULTA DE DATOS
  Query: {
    tables: async () => {
      return findAllTables();
    },
    table: async (_, { _id }) => {
      return findOneTable({ _id });
    },

    products: async () => {
      return findAllProducts();
    },
    product: async (_, { _id }) => {
      return findOneProduct({ _id });
    },
  },

  // CREACION Y ACTUALIZACION DE DATOS
  Mutation: {
    createTable: async (_, { name, prize }) => {
      return createTable({ name, prize });
    },
    deleteTable: async (_, { _id }) => {
      return deleteTable({ _id });
    },
    updateTable: async (_, args) => {
      return updateProduct({ args });
    },

    createProduct: async (_, { name, prize, quantity, tableId }) => {
      return createProduct({ name, prize, quantity, tableId });
    },
    deleteProduct: async (_, { _id }) => {
      return deleteProduct({ _id });
    },
    updateProduct: async (_, args) => {
      return updateProduct({ args });
    },
  },
};
