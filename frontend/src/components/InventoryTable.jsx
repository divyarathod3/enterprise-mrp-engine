import { useEffect, useState } from "react";
import { getItems } from "../services/itemService";
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
      console.error("Error loading inventory:", error);
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
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.itemCode}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>₹ {item.price}</td>
                <td>
                  {item.quantity < 10 ? "Low Stock" : "Available"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Items Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default InventoryTable;