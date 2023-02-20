import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { GET_TABLE } from "../../graphql/tables";
import ProductCard from "../ProductCard/ProductCard";
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
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{data?.table.name}</h1>
            <Button
              type="secondary"
              size={"large"}
              className={styles.addProduct}
            >
              <PlusCircleOutlined />
            </Button>
          </div>
          <div className={styles.productList}>
            {data?.table.products.map(({ _id, name, prize, quantity }) => {
              return (
                <ProductCard
                  key={_id}
                  id={_id}
                  name={name}
                  prize={prize}
                  quantity={quantity}
                />
              );
            })}
          </div>
          <h2>Precio total: ${data?.table.prize}</h2>
        </div>
      )}
    </main>
  );
}
