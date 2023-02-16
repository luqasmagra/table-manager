import React from "react";

import TableList from "../components/TableList/TableList";

import styles from "./Home.module.css";

export default function Tables() {
  return (
    <main className={styles.main}>
      <TableList />
    </main>
  );
}
