import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button } from "antd";
import { PlusCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { GET_TABLE } from "../../graphql/tables";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./TableDetails.module.css";

export default function TableDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const { loading, error, data } = useQuery(GET_TABLE, {
    variables: {
      id: params.id,
    },
    skip: !params.id, // Saltear esta consulta si params.id es distinto a undefined
  });

  return (
    <section className="mainContainer">
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
            <Button
              title="Mesas"
              type="secondary"
              size={"large"}
              className={styles.goBack}
              onClick={() => navigate(-1)}
            >
              <LeftOutlined />
            </Button>
            <h1 className={styles.title}>{data?.table.name}</h1>
            <Button
              title="Agregar producto"
              type="secondary"
              size={"large"}
              className={styles.addProduct}
            >
              <PlusCircleOutlined />
            </Button>
          </div>
          <div className={styles.productList}>
            {data?.table.products.length ? (
              data?.table.products.map(({ _id, name, prize, quantity }) => {
                return (
                  <ProductCard
                    key={_id}
                    id={_id}
                    name={name}
                    prize={prize}
                    quantity={quantity}
                  />
                );
              })
            ) : (
              <p title="Click + para agregar productos">No hay productos</p>
            )}
          </div>
          <h2>Precio total: ${data?.table.prize}</h2>
        </div>
      )}
    </section>
  );
}
