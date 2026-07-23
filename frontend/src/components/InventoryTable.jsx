import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../services/itemService";
import "../styles/InventoryTable.css";

function InventoryTable() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error loading items:", error);
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

      <input
        type="text"
        placeholder="🔍 Search by Item Code or Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

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

          {items
            .filter((item) =>
              item.itemName.toLowerCase().includes(search.toLowerCase()) ||
              item.itemCode.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (

              <tr key={item.id}>

                <td>{item.itemCode}</td>

                <td>{item.itemName}</td>

                <td>{item.description}</td>

                <td>{item.quantity}</td>

                <td>₹ {item.price}</td>

                <td>
                  {item.quantity < 10 ? (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      🔴 Low Stock
                    </span>
                  ) : (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      🟢 Available
                    </span>
                  )}
                </td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => alert("Edit feature coming next!")}
                  >
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