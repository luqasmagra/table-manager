import React from "react";
import { Select, InputNumber } from "antd";
import { products as PRODUCTS } from "../../mocks/products.json";
import useCreateProduct from "../../hooks/useCreateProduct";
import styles from "./ProductForm.module.css";

const PRODUCTS_TO_RENDER = PRODUCTS.map((product) => {
  return { value: product.name, label: product.name };
});

export default function ProductForm({ visible, onClose }) {
  const { product, loading, handleSubmit, handleProduct, handleQuantity } =
    useCreateProduct({ onClose });

  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  if (!visible) return null;
  return (
    <section id="modal" className="sectionForm" onClick={handleOnClose}>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="mainContainerForm">
          <h2>Agregar nuevo producto</h2>
          <form onSubmit={handleSubmit} className="formContainer">
            <div className={styles.selectContainer}>
              <label className="label">Producto</label>
              <Select
                className={styles.select}
                size="large"
                showSearch
                placeholder="Selecione un producto"
                optionFilterProp="children"
                onChange={handleProduct}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={PRODUCTS_TO_RENDER}
              />
            </div>
            <div className={styles.selectContainer}>
              <label className="label">Cantidad</label>
              <InputNumber
                size="large"
                min={1}
                max={100}
                defaultValue={null}
                onChange={handleQuantity}
              />
            </div>
            <button className="createButton" disabled={!product.name.length}>
              +
            </button>
          </form>
          <button onClick={onClose} className="cancelButton">
            Cancelar
          </button>
        </div>
      )}
    </section>
  );
}
