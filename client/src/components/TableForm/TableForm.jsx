import useCreateTable from "../../hooks/useCreateTable";
import styles from "./TableForm.module.css";

export default function TableForm({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };
  if (!visible) return null;

  const { loading, handleSubmit, handleChange, table } = useCreateTable({
    onClose,
  });

  return (
    <section id="modal" className="mainContainerForm" onClick={handleOnClose}>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <label style={{ color: "whitesmoke", fontSize: "20px" }}>
                Agregar nueva mesa
              </label>
              <input
                className={styles.name}
                min="1"
                type="number"
                name="number"
                placeholder="Mesa:"
                onChange={handleChange}
              />
            </div>
            <button className={styles.create} disabled={!table.number}>
              +
            </button>
          </form>
          <button className={styles.close} onClick={onClose}>
            Cancelar
          </button>
        </div>
      )}
    </section>
  );
}
