import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation ($id: ID!) {
    deleteProduct(_id: $id) {
      _id
    }
  }
`;
