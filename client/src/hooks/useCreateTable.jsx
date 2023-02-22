import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TABLE, GET_TABLES } from "../graphql/tables";

export default function useCreateTable({ onClose }) {
  const [table, setTable] = useState({ number: 0 });
  const [createTable, { loading }] = useMutation(CREATE_TABLE, {
    refetchQueries: [{ query: GET_TABLES }, "getTables"],
  });
  const handleChange = ({ target: { name, value } }) => {
    setTable({ ...table, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTable({
      variables: {
        name: `Mesa ${table.number}`,
      },
    });
    onClose();
  };
  return {
    loading,
    handleSubmit,
    handleChange,
    table,
  };
}
