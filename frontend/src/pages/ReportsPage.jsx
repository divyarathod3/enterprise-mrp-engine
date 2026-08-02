import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ReportsPage.css";

function ReportsPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">

        <h1 className="page-title">Reports Dashboard</h1>

        {/* KPI Cards */}
        <div className="report-cards">

          <div className="report-card">
            <h3>Total Sales</h3>
            <h2>₹8,40,000</h2>
            <p>This Month</p>
          </div>

          <div className="report-card">
            <h3>Total Purchase</h3>
            <h2>₹5,62,000</h2>
            <p>This Month</p>
          </div>

          <div className="report-card">
            <h3>Revenue</h3>
            <h2>₹2,78,000</h2>
            <p>Current Revenue</p>
          </div>

          <div className="report-card">
            <h3>Profit</h3>
            <h2>₹1,18,000</h2>
            <p>Estimated</p>
          </div>

        </div>

        {/* Charts */}
        <div className="chart-grid">

          <div className="chart-card">
            <h2>Monthly Sales</h2>

            <div className="chart-placeholder">
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "65%" }}></div>
              <div className="bar" style={{ height: "100%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
            </div>

          </div>

          <div className="chart-card">

            <h2>Purchase Trend</h2>

            <div className="line-placeholder">
              <svg width="100%" height="220">
                <polyline
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="4"
                  points="10,180 80,120 150,140 220,60 290,90 360,30"
                />
              </svg>
            </div>

          </div>

        </div>

        {/* Summary */}

        <div className="summary-grid">

          <div className="summary-card">

            <h2>Inventory Summary</h2>

            <table>

              <tbody>

                <tr>
                  <td>Available Stock</td>
                  <td>2300</td>
                </tr>

                <tr>
                  <td>Reserved Stock</td>
                  <td>520</td>
                </tr>

                <tr>
                  <td>Low Stock</td>
                  <td>12</td>
                </tr>

                <tr>
                  <td>Out Of Stock</td>
                  <td>4</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="summary-card">

            <h2>Top Selling Products</h2>

            <ul>
              <li>Laptop</li>
              <li>Monitor</li>
              <li>Keyboard</li>
              <li>Mouse</li>
              <li>CPU</li>
            </ul>

          </div>

          <div className="summary-card">

            <h2>Top Suppliers</h2>

            <table>

              <tbody>

                <tr>
                  <td>ABC Pvt Ltd</td>
                  <td>52 Orders</td>
                </tr>

                <tr>
                  <td>Dell</td>
                  <td>34 Orders</td>
                </tr>

                <tr>
                  <td>HP</td>
                  <td>28 Orders</td>
                </tr>

                <tr>
                  <td>Lenovo</td>
                  <td>19 Orders</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Download Reports */}

        <div className="download-card">

          <h2>Quick Reports</h2>

          <div className="download-buttons">

            <button>Sales Report</button>

            <button>Purchase Report</button>

            <button>Inventory Report</button>

            <button>Invoice Report</button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ReportsPage;