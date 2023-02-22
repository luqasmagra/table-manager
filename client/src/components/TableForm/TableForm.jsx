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
    <section id="modal" className="sectionForm" onClick={handleOnClose}>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="mainContainerForm">
          <h2>Agregar nueva mesa</h2>
          <form className="formContainer" onSubmit={handleSubmit}>
            <input
              className={styles.name}
              min="1"
              type="number"
              name="number"
              placeholder="Mesa:"
              onChange={handleChange}
            />
            <button className="createButton" disabled={!table.number}>
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
