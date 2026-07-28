import { useEffect, useState } from "react";
import {
  getPurchaseOrders,
  deletePurchaseOrder
} from "../services/purchaseOrderService";

import "../styles/PurchaseOrderTable.css";

function PurchaseOrderTable({ refresh }) {

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    if (refresh) {
      loadOrders();
    }
  }, [refresh]);

  const loadOrders = async () => {
    const response = await getPurchaseOrders();
    setOrders(response.data);
  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete Purchase Order?")) {

      await deletePurchaseOrder(id);

      loadOrders();

    }

  };

  return (

    <div className="table-container">

      <h2>Purchase Orders</h2>

      <input
        className="search-box"
        placeholder="Search PO..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>

          <tr>

            <th>PO Code</th>
            <th>Supplier</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {orders
            .filter(order =>
              order.poCode.toLowerCase().includes(search.toLowerCase()) ||
              order.supplierName.toLowerCase().includes(search.toLowerCase()) ||
              order.itemName.toLowerCase().includes(search.toLowerCase())
            )
            .map(order => (

              <tr key={order.id}>

                <td>{order.poCode}</td>

                <td>{order.supplierName}</td>

                <td>{order.itemName}</td>

                <td>{order.quantity}</td>

                <td>₹ {order.unitPrice}</td>

                <td>₹ {order.totalAmount}</td>

                <td>{order.orderDate}</td>

                <td>

                  <span
                    style={{
                      color:
                        order.status === "Received"
                          ? "green"
                          : order.status === "Approved"
                          ? "orange"
                          : "red",
                      fontWeight: "bold"
                    }}
                  >
                    {order.status}
                  </span>

                </td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      alert("Edit feature coming next!")
                    }
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(order.id)}
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

export default PurchaseOrderTable;