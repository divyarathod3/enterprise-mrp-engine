import { useState } from "react";
import { addItem } from "../services/itemService";
import "../styles/AddItemForm.css";

function AddItemForm({ refreshItems }) {

  const [item, setItem] = useState({
    itemName: "",
    description: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addItem(item);

      alert("Item Added Successfully!");

      setItem({
        itemName: "",
        description: "",
        quantity: "",
        price: ""
      });

      if (refreshItems) {
        refreshItems();
      }

    } catch (error) {
      console.error(error);
      alert("Failed to add item");
    }

  };

  return (

    <div className="form-container">

      <h2>➕ Add New Inventory Item</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="itemName"
          placeholder="Item Name"
          value={item.itemName}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleChange}
          required
          min="0"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />

        <button type="submit">
           Save Item
        </button>

      </form>

    </div>

  );

}

export default AddItemForm;