import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Popconfirm } from "antd";
import {
  PlusCircleOutlined,
  LeftOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { GET_TABLE } from "../../graphql/tables";
import ProductsList from "../ProductsList/ProductsList";
import ProductForm from "../ProductForm/ProductForm";
import useModal from "../../hooks/useModal";
import useDeleteTable from "../../hooks/useDeleteTable";
import { getTotalPrize } from "./getPrize";
import styles from "./TableDetails.module.css";

export default function TableDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const { loading, error, data } = useQuery(GET_TABLE, {
    variables: {
      id: params.id,
    },
  });

  const totalPrize = getTotalPrize({ products: data?.table.products });

  const { handleDelete } = useDeleteTable({ params });
  const { open, handleOnClose, handleOpen } = useModal();

  return (
    <section className="mainContainer">
      {loading ? (
        <span className="containerLoader">
          <span className="loader"></span>
        </span>
      ) : error ? (
        <span className="containerError">
          <span className="error">Error de servidor</span>
        </span>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <Button
              title="Mesas"
              type="secondary"
              size={"large"}
              className={styles.goBack}
              onClick={() => navigate("/")}
            >
              <LeftOutlined />
            </Button>
            <h1 className={styles.title}>{data?.table.name}</h1>
            <Button
              title="Agregar producto"
              type="secondary"
              size={"large"}
              className={styles.addProduct}
              onClick={handleOpen}
            >
              <PlusCircleOutlined />
            </Button>
          </div>
          <div className={styles.productList}>
            <ProductsList products={data?.table.products} />
          </div>
          <div className={styles.footer}>
            <h2>Precio total: ${totalPrize}</h2>
            <Popconfirm
              placement="left"
              title={`¿Seguro que desea eliminar la ${data?.table.name}?`}
              onConfirm={handleDelete}
              okText="Si"
              cancelText="No"
              icon={null}
            >
              <Button type="secondary" className={styles.deleteTable}>
                <DeleteOutlined />
                Borrar mesa
              </Button>
            </Popconfirm>
          </div>
          <ProductForm onClose={handleOnClose} visible={open} />
        </div>
      )}
    </section>
  );
}
