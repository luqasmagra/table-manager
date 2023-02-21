import React from "react";

export default function ProductForm({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };
  if (!visible) return null;
  const loading = false;

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
