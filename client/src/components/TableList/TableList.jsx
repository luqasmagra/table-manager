import React from "react";
import { useQuery } from "@apollo/client";

import TableCard from "../TableCard/TableCard";
import { GET_TABLES } from "../../graphql/tables";

import styles from "./TableList.module.css";

export default function TableList() {
  const { loading, error, data } = useQuery(GET_TABLES);

  if (loading) return <span className={styles.loader}></span>;
  if (error) return <span className={styles.error}>Error</span>;

  return (
    <>
      {data?.tables.map(({ _id, name, prize }) => {
        return <TableCard key={_id} _id={_id} name={name} prize={prize} />;
      })}
    </>
  );
}
