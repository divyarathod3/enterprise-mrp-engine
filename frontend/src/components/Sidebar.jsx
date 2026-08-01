import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBoxes,
  FaTruck,
  FaShoppingCart,
  FaBoxOpen,
  FaFileInvoice,
  FaReceipt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>MRP Engine</h2>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/" className="sidebar-link">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/inventory" className="sidebar-link">
          <FaBoxes />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/suppliers" className="sidebar-link">
          <FaTruck />
          <span>Suppliers</span>
        </NavLink>

        <NavLink to="/purchase-orders" className="sidebar-link">
          <FaShoppingCart />
          <span>Purchase Orders</span>
        </NavLink>

        <NavLink to="/grn" className="sidebar-link">
          <FaBoxOpen />
          <span>Goods Receipt</span>
        </NavLink>

        <NavLink to="/sales-orders" className="sidebar-link">
          <FaReceipt />
          <span>Sales Orders</span>
        </NavLink>

        <NavLink to="/invoice" className="sidebar-link">
          <FaFileInvoice />
          <span>Invoice</span>
        </NavLink>

        <NavLink to="/reports" className="sidebar-link">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className="sidebar-link">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;