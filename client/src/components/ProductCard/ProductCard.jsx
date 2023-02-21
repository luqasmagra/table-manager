import React from "react";
import { Button } from "antd";
import { DeleteOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../../graphql/products";
import { GET_TABLE } from "../../graphql/tables";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, name, prize, quantity }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: GET_TABLE }, "getTable"], // vuelvo a realizar la consulta para que se actualice la Table
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProduct({ variables: { id } });
  };

  return (
    <div className={styles.container}>
      <div>
        <h4>{quantity}</h4>
      </div>
      <div className={styles.description}>
        <h4>{name}</h4> - <h4>${prize} c/u</h4>
      </div>
      {loading ? (
        <Loading3QuartersOutlined spin="true" />
      ) : (
        <Button
          title="Borrar producto"
          type="secondary"
          className={styles.delete}
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        />
      )}
    </div>
  );
}
