import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_TABLE, GET_TABLES } from "../graphql/tables";

export default function useDeleteTable({ id }) {
  const navigate = useNavigate();
  const [deleteTable] = useMutation(DELETE_TABLE, {
    variables: {
      id,
    },
    refetchQueries: [{ query: GET_TABLES }, "getTables"],
  });
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTable({ variables: { id } });
    navigate("/");
  };

  return { handleDelete };
}
