import { gql } from "@apollo/client";

export const GET_TABLES = gql`
  {
    tables {
      _id
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
