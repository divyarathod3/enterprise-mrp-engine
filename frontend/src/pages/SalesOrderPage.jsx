import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/SalesOrderPage.css";

function SalesOrderPage() {
  const [form, setForm] = useState({
    customerName: "",
    itemCode: "",
    itemName: "",
    quantity: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Backend will be connected tomorrow.");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1 className="page-title">Sales Order Management</h1>

        <div className="card">
          <h2>Create Sales Order</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={form.customerName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="itemCode"
                placeholder="Item Code"
                value={form.itemCode}
                onChange={handleChange}
              />

              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={form.itemName}
                onChange={handleChange}
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={form.quantity}
                onChange={handleChange}
              />

              <input
                type="date"
                name="orderDate"
                value={form.orderDate}
                onChange={handleChange}
              />
            </div>

            <button className="btn-primary">
              Create Order
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Sales Orders</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>SO Code</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Backend will be connected tomorrow
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesOrderPage;