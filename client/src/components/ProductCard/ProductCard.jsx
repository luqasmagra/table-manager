import React from "react";
import { Button, Typography } from "antd";
import { DeleteOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import styles from "./ProductCard.module.css";
import useEditProduct from "../../hooks/useEditProduct";

export default function ProductCard({ id, name, prize, quantity }) {
  const { handleDelete, deleteLoading } = useDeleteProduct({ id });
  const { handleEditProduct, editLoading } = useEditProduct({ id });

  return (
    <div className={styles.container}>
      {editLoading ? (
        <span className={styles.loading}>
          <Loading3QuartersOutlined spin="true" />
        </span>
      ) : (
        <span className={styles.editable}>
          <Typography.Title
            editable={{
              onChange: (quantity) => handleEditProduct(quantity),
            }}
            level={4}
            code={true}
          >
            {quantity}
          </Typography.Title>
        </span>
      )}
      <div className={styles.description}>
        <h4>{name}</h4>- <h4>${prize} c/u</h4>
      </div>
      {deleteLoading ? (
        <span className={styles.loading}>
          <Loading3QuartersOutlined spin="true" />
        </span>
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
