import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TABLE } from "../graphql/tables";

export default function useGetTable() {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_TABLE, {
    variables: {
      id: params.id,
    },
  });

  return {
    id: params.id,
    loading,
    error,
    products: data?.table.products,
    name: data?.table.name,
  };
}
