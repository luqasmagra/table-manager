import { gql } from "@apollo/client";

export const GET_TABLES = gql`
  query getTables {
    tables {
      _id
      name
      prize
    }
  }
`;

export const CREATE_TABLE = gql`
  mutation ($name: String) {
    createTable(name: $name) {
      _id
      name
      prize
    }
  }
`;

export const GET_TABLE = gql`
  query getTable($id: ID!) {
    table(_id: $id) {
      name
      prize
      products {
        _id
        name
        prize
        quantity
      }
    }
  }
`;

export const DELETE_TABLE = gql`
  mutation ($id: ID!) {
    deleteTable(_id: $id) {
      _id
    }
  }
`;
