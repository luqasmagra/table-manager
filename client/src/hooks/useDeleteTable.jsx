import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE_TABLE, GET_TABLE, GET_TABLES } from "../graphql/tables";
import { useMutation, useQuery } from "@apollo/client";

export default function useDeleteTable({ params }) {
  const navigate = useNavigate();
  const [deleteTable] = useMutation(DELETE_TABLE, {
    variables: {
      id: params.id,
    },
    refetchQueries: [{ query: GET_TABLES }, "getTables"], // vuelvo a realizar la consulta para que se actualice las Tables
  });
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTable({ variables: { id: params.id } });
    navigate("/");
  };

  return { handleDelete };
}
