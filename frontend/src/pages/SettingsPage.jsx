import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/SettingsPage.css";

function SettingsPage() {

  const [company, setCompany] = useState({
    companyName: "Enterprise MRP Engine",
    gst: "27ABCDE1234F1Z5",
    phone: "+91 9876543210",
    email: "admin@mrp.com",
    address: "Pune, Maharashtra"
  });

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <h1 className="page-title">
          System Settings
        </h1>

        {/* Company Information */}

        <div className="settings-card">

          <h2>Company Information</h2>

          <div className="settings-grid">

            <input
              type="text"
              value={company.companyName}
              onChange={(e) =>
                setCompany({ ...company, companyName: e.target.value })
              }
              placeholder="Company Name"
            />

            <input
              type="text"
              value={company.gst}
              onChange={(e) =>
                setCompany({ ...company, gst: e.target.value })
              }
              placeholder="GST Number"
            />

            <input
              type="text"
              value={company.phone}
              onChange={(e) =>
                setCompany({ ...company, phone: e.target.value })
              }
              placeholder="Phone"
            />

            <input
              type="email"
              value={company.email}
              onChange={(e) =>
                setCompany({ ...company, email: e.target.value })
              }
              placeholder="Email"
            />

            <textarea
              rows="4"
              value={company.address}
              onChange={(e) =>
                setCompany({ ...company, address: e.target.value })
              }
              placeholder="Address"
            />

          </div>

        </div>

        {/* User Profile */}

        <div className="settings-card">

          <h2>User Profile</h2>

          <div className="settings-grid">

            <input
              type="text"
              defaultValue="Divya Rathod"
            />

            <input
              type="text"
              defaultValue="Administrator"
            />

            <input
              type="email"
              defaultValue="admin@mrp.com"
            />

            <input
              type="password"
              placeholder="New Password"
            />

          </div>

        </div>

        {/* Theme */}

        <div className="settings-card">

          <h2>Theme</h2>

          <div className="theme-options">

            <label>

              <input
                type="radio"
                name="theme"
                defaultChecked
              />

              Green Inventory

            </label>

            <label>

              <input
                type="radio"
                name="theme"
              />

              Dark

            </label>

            <label>

              <input
                type="radio"
                name="theme"
              />

              Light

            </label>

          </div>

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <h2>Notifications</h2>

          <div className="toggle-group">

            <label>
              <input type="checkbox" defaultChecked />
              Email Notifications
            </label>

            <label>
              <input type="checkbox" />
              SMS Notifications
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              Desktop Alerts
            </label>

          </div>

        </div>

        {/* Backup */}

        <div className="settings-card">

          <h2>Database</h2>

          <div className="button-group">

            <button>Backup Database</button>

            <button>Restore Database</button>

            <button>Export Data</button>

            <button>Import Data</button>

          </div>

        </div>

        {/* Save */}

        <div className="save-card">

          <button className="save-btn">
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default SettingsPage;