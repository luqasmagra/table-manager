import React from "react";
import { Link } from "react-router-dom";
import styles from "./TableCard.module.css";

export default function TableCard({ _id, name, prize }) {
  return (
    <>
      <Link
        to={`/mesa/${_id}`}
        className={styles.container}
        title="Click para ver detalles"
      >
        <div className={styles.description}>
          <h1 className={styles.title}>{name}</h1>
          <h2 className={styles.prize}>$ {prize}</h2>
        </div>
      </Link>
    </>
  );
}
