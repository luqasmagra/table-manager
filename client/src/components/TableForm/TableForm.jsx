import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TABLE, GET_TABLES } from "../../graphql/tables";
import styles from "./TableForm.module.css";

export default function TableForm({ visible, onClose }) {
  const [table, setTable] = useState({ number: 0 });
  const [createTable, { loading }] = useMutation(CREATE_TABLE, {
    refetchQueries: [{ query: GET_TABLES }, "getTables"], // vuelvo a realizar la consulta para que se actualice la TableList
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
        name: `Mesa ${table.number}`,
      },
    });
    onClose();
  };

  return (
    <section
      id="tableFormModal"
      className={styles.mainContainerForm}
      onClick={handleOnClose}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <label style={{ color: "whitesmoke", fontSize: "20px" }}>
                Agregar nueva mesa
              </label>
              <input
                className={styles.name}
                min="1"
                type="number"
                name="number"
                placeholder="Mesa:"
                onChange={handleChange}
              />
            </div>
            <button className={styles.create} disabled={!table.number}>
              +
            </button>
          </form>
          <button className={styles.close} onClick={onClose}>
            Cancelar
          </button>
        </div>
      )}
    </section>
  );
}
