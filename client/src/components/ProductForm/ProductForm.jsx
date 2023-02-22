import React from "react";
import { useMutation } from "@apollo/client";
import { Select, InputNumber } from "antd";
import { CREATE_PRODUCT } from "../../graphql/products";
import { GET_TABLE } from "../../graphql/tables";
import styles from "./ProductForm.module.css";

export default function ProductForm({ visible, onClose }) {
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_TABLE }, "getTable"], // vuelvo a realizar la consulta para que se actualice la TableList
  });
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  const handleSubmit = (e) => {};

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
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
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </div>
            <div className={styles.selectContainer}>
              <label className="label">Cantidad</label>
              <InputNumber
                size="large"
                min={1}
                max={100}
                defaultValue={1}
                onChange={onChange}
              />
            </div>
            <button className="createButton">+</button>
          </form>
          <button onClick={onClose} className="cancelButton">
            Cancelar
          </button>
        </div>
      )}
    </section>
  );
}
