import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TABLE, GET_TABLES } from "../graphql/tables";

export default function useCreateTable({ onClose }) {
  const [tableNumber, setTableNumber] = useState(null);

  const [createTable, { loading }] = useMutation(CREATE_TABLE, {
    refetchQueries: [{ query: GET_TABLES }, "getTables"],
  });

  const handleChange = ({ target }) => {
    const { value } = target;
    setTableNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTable({
      variables: {
        name: `Mesa ${tableNumber}`,
      },
    });
    onClose();
  };

  return {
    loading,
    handleSubmit,
    handleChange,
    tableNumber,
  };
}
