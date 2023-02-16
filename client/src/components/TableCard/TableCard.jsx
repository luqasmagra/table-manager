import React from "react";

import styles from "./TableCard.module.css";

export default function TableCard({ _id, name, prize, products }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.prize}>$ {prize}</h2>
      </div>
    </div>
  );
}
