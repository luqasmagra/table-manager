import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TABLE, GET_TABLES } from "../../graphql/tables";
import styles from "./TableForm.module.css";

export default function TableForm({ visible, onClose }) {
  const [table, setTable] = useState({ name: "" });
  const [createTable, { loading, error }] = useMutation(CREATE_TABLE, {
    refetchQueries: [{ query: GET_TABLES }, "GetTables"],
  });

  const handleOnClose = (e) => {
    if (e.target.id === "tableFormModal") onClose();
  };
  if (!visible) return null;

  const handleChange = ({ target: { name, value } }) => {
    setTable({ ...table, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTable({
      variables: {
        name: table.name,
      },
    });
    onClose();
  };

  return (
    <div
      id="tableFormModal"
      className={styles.mainContainer}
      onClick={handleOnClose}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && <p>{error.message}</p>}
            <input
              className={styles.name}
              type="text"
              name="name"
              placeholder="e.g Mesa 1"
              onChange={handleChange}
            />
            <button className={styles.create} disabled={!table.name}>
              +
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
