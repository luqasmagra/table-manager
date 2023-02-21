import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation ($id: ID!) {
    deleteProduct(_id: $id) {
      _id
    }
  }
`;
export const CREATE_PRODUCT = gql`
  mutation ($name: String, $prize: Int, $quantity: Int, $tableId: ID) {
    createProduct(
      name: $name
      prize: $prize
      quantity: $quantity
      tableId: $tableId
    ) {
      _id
    }
  }
`;
