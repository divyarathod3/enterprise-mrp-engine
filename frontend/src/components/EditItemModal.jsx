import { useState, useEffect } from "react";
import { updateItem } from "../services/itemService";
import "../styles/EditItemModal.css";

function EditItemModal({ item, onClose, onSuccess }) {

  const [formData, setFormData] = useState(item);

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {

      await updateItem(item.id, formData);

      alert("Item Updated Successfully");

      onSuccess();

      onClose();

    } catch (error) {

      console.error(error);

      alert("Failed to update item");

    }
  };

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Item</h2>

        <form onSubmit={handleUpdate}>

          <input
            value={formData.itemCode}
            readOnly
          />

          <input
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />

          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button type="submit">
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default EditItemModal;