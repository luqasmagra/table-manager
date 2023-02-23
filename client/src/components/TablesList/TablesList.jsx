import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TABLES } from "../../graphql/tables";
import TableForm from "../TableForm/TableForm";
import TableCard from "../TableCard/TableCard";
import useModal from "../../hooks/useModal";
import styles from "./TablesList.module.css";

export default function TableList() {
  const { loading, error, data } = useQuery(GET_TABLES);

  const { open, handleOnClose, handleOpen } = useModal();

  return (
    <section className="mainContainer">
      {loading ? (
        <span className="containerLoader">
          <span className="loader"></span>
        </span>
      ) : error ? (
        <span className="containerError">
          <span className="error">Error de servidor</span>
        </span>
      ) : (
        <div className={styles.container}>
          {data?.tables.length ? (
            data?.tables.map(({ _id, name, prize }) => {
              return (
                <TableCard key={_id} _id={_id} name={name} prize={prize} />
              );
            })
          ) : (
            <p
              style={{ color: "whitesmoke", margin: "0 auto" }}
              title="Click en + para agregar mesa"
            >
              No hay mesas
            </p>
          )}
          <button
            title="Agrear nueva mesa"
            className={styles.createTable}
            onClick={handleOpen}
          >
            +
          </button>
          <TableForm onClose={handleOnClose} visible={open} />
        </div>
      )}
    </section>
  );
}
