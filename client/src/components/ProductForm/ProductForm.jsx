import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../graphql/products";
import { GET_TABLE } from "../../graphql/tables";

export default function ProductForm({ visible, onClose }) {
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_TABLE }, "getTable"], // vuelvo a realizar la consulta para que se actualice la TableList
  });
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };
  if (!visible) return null;

  return (
    <section id="modal" className="mainContainerForm" onClick={handleOnClose}>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          <form>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <label style={{ color: "whitesmoke", fontSize: "20px" }}>
                Agregar nueva mesa
              </label>
              <input min="1" type="number" name="number" placeholder="Mesa:" />
            </div>
            <button>+</button>
          </form>
          <button onClick={onClose}>Cancelar</button>
        </div>
      )}
    </section>
  );
}
