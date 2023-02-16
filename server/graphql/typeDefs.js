import { gql } from "graphql-tag";

// Definicion de tipos de datos
export const typeDefs = gql`
  type Query {
    tables: [Table]
    table(_id: ID!): Table

    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    createTable(name: String, prize: Int): Table
    deleteTable(_id: ID!): Table
    updateTable(_id: ID!, prize: Int!): Table

    createProduct(name: String, prize: Int, quantity: Int, tableId: ID): Product
    deleteProduct(_id: ID!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
  }

  type Table {
    _id: ID
    name: String
    prize: Int
    products: [Product]
  }

  type Product {
    _id: ID
    name: String
    prize: Int
    quantity: Int
    table: Table
    tableId: ID
  }
`;
