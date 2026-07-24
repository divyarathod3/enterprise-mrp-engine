import {
  FaHome,
  FaBoxes,
  FaTruck,
  FaShoppingCart,
  FaChartBar,
  FaCog
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {

  const location = useLocation();

  return (

    <div className="sidebar">

      <h2>MRP Engine</h2>

      <ul>

        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li className={location.pathname === "/inventory" ? "active" : ""}>
          <Link to="/inventory">
            <FaBoxes /> Inventory
          </Link>
        </li>

        <li className={location.pathname === "/suppliers" ? "active" : ""}>
          <Link to="/suppliers">
            <FaTruck /> Suppliers
          </Link>
        </li>

        <li>
          <FaShoppingCart /> Orders
        </li>

        <li>
          <FaChartBar /> Reports
        </li>

        <li>
          <FaCog /> Settings
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;