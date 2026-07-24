import "../styles/DeleteConfirmModal.css";

function DeleteConfirmModal({ onCancel, onDelete }) {

  return (

    <div className="delete-overlay">

      <div className="delete-modal">

        <h2>Delete Item</h2>

        <p>
          Are you sure you want to delete this item?
        </p>

        <div className="delete-buttons">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default DeleteConfirmModal;