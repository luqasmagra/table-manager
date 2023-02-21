import React from "react";
import { Button } from "antd";
import { DeleteOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import styles from "./ProductCard.module.css";
import useDeleteProduct from "../../hooks/useDeleteProduct";

export default function ProductCard({ id, name, prize, quantity }) {
  const { handleDelete, loading } = useDeleteProduct({ id });

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
