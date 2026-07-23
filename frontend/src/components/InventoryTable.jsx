import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../services/itemService";
import "../styles/InventoryTable.css";

function InventoryTable() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {
      await deleteItem(id);
      loadItems();
      alert("Item deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete item.");
    }
  };

  return (
    <div className="table-container">

      <h2>Inventory</h2>

      <table>

        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {items.map((item) => (

            <tr key={item.id}>

              <td>{item.itemCode}</td>
              <td>{item.itemName}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>₹ {item.price}</td>

              <td>
                {item.quantity < 10 ? "🔴 Low Stock" : "🟢 Available"}
              </td>

              <td>

                <button className="edit-btn">
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑 Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default InventoryTable;