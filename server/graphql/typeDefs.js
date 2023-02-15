import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    tables: [Table]
    products: [Product]
  }

  type Mutation {
    createTable(name: String, prize: Int): Table
    createProduct(name: String, prize: Int, tableId: ID): Product
  }

  type Table {
    _id: ID
    name: String
    prize: Int
    createdAt: String
    updateAt: String
  }

  type Product {
    _id: ID
    name: String
    prize: Int
    tableId: ID
    createdAt: String
    updateAt: String
  }
`;

// ToDo [tableId]
