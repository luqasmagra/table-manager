import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TABLE } from "../../graphql/tables";
import styles from "./TableDetails.module.css";

export default function TableDetails() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_TABLE, {
    variables: {
      id: params.id,
    },
    skip: !params.id, // Saltear esta consulta si params.id es distinto a undefined
  });

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
        <div className="">
          {data?.table.products.map(({ _id, name, prize }) => {
            return <h1>{name}</h1>;
          })}
        </div>
      )}
    </main>
  );
}
