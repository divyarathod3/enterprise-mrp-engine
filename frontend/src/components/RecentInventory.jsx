import { useEffect, useState } from "react";
import { getItems } from "../services/itemService";

function RecentInventory() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();

      // Show only first 5 items
      setItems(response.data.slice(0, 5));

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="table-container">

      <h2>Recent Inventory</h2>

      <table>

        <thead>

          <tr>

            <th>Code</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {items.map((item) => (

            <tr key={item.id}>

              <td>{item.itemCode}</td>

              <td>{item.itemName}</td>

              <td>{item.quantity}</td>

              <td>

                {item.quantity < 10
                  ? "🔴 Low Stock"
                  : "🟢 Available"}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentInventory;