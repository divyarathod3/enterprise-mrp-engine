import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/InvoicePage.css";

function InvoicePage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1 className="page-title">Invoice Management</h1>

        <div className="card">
          <h2>Generate Invoice</h2>

          <button className="btn-primary">
            Generate Invoice
          </button>
        </div>

        <div className="card">
          <h2>Invoice History</h2>

          <table className="data-table">
            <thead>
              <tr>
                <th>Invoice No</th>
                <th>Customer</th>
                <th>Order No</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5" className="no-data">
                  No Invoice Available
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default InvoicePage;

