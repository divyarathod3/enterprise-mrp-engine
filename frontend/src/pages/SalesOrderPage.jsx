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

  const [orders, setOrders] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      soCode: `SO${String(orders.length + 1).padStart(3, "0")}`,
      ...form,
    };

    setOrders([...orders, newOrder]);

    setForm({
      customerName: "",
      itemCode: "",
      itemName: "",
      quantity: "",
      orderDate: "",
    });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">

        <h1 className="page-title">
          Sales Order Management
        </h1>

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
                required
              />

              <input
                type="text"
                name="itemCode"
                placeholder="Item Code"
                value={form.itemCode}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={form.itemName}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={form.quantity}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="orderDate"
                value={form.orderDate}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit" className="btn-primary">
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
                <th>Item Code</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {orders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No Sales Orders Available
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.soCode}</td>
                    <td>{order.customerName}</td>
                    <td>{order.itemCode}</td>
                    <td>{order.itemName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.orderDate}</td>

                    <td>

                      <button className="btn-edit">
                        Edit
                      </button>

                      <button className="btn-delete">
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default SalesOrderPage;