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

import "../styles/Sidebar.css";<nav className="sidebar-menu">

  <div className="menu-title">MAIN</div>

  <NavLink to="/dashboard">
    <FaHome />
    <span>Dashboard</span>
  </NavLink>

  <div className="menu-title">INVENTORY</div>

  <NavLink to="/items">
    <FaBoxes />
    <span>Items</span>
  </NavLink>

  <NavLink to="/suppliers">
    <FaTruck />
    <span>Suppliers</span>
  </NavLink>

  <NavLink to="/purchase-orders">
    <FaShoppingCart />
    <span>Purchase Orders</span>
  </NavLink>

  <NavLink to="/grn">
    <FaBoxOpen />
    <span>Goods Receipt</span>
  </NavLink>

  <div className="menu-title">SALES</div>

  <NavLink to="/sales-orders">
    <FaFileInvoice />
    <span>Sales Orders</span>
  </NavLink>

  <NavLink to="/invoice">
    <FaReceipt />
    <span>Invoices</span>
  </NavLink>

  <div className="menu-title">SYSTEM</div>

  <NavLink to="/reports">
    <FaChartBar />
    <span>Reports</span>
  </NavLink>

  <NavLink to="/settings">
    <FaCog />
    <span>Settings</span>
  </NavLink>

</nav>