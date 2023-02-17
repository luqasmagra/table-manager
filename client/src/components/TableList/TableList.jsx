import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_TABLES } from "../../graphql/tables";

import styles from "./TableList.module.css";
import TableForm from "../TableForm/TableForm";
import TableCard from "../TableCard/TableCard";

export default function TableList() {
  const { loading, error, data } = useQuery(GET_TABLES);
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <main className="mainContainer">
      {loading ? (
        <span className="containerLoader">
          <span className="loader"></span>
        </span>
      ) : error ? (
        <span className="containerError">
          <span className="error">No es posible conectar al servidor</span>
        </span>
      ) : (
        <div className={styles.container}>
          {data?.tables.map(({ _id, name, prize }) => {
            return <TableCard key={_id} _id={_id} name={name} prize={prize} />;
          })}
          <button className={styles.createTable} onClick={handleOpen}>
            +
          </button>
          <TableForm onClose={handleOnClose} visible={open} />
        </div>
      )}
    </main>
  );
}
