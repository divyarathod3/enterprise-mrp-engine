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

        <li className={location.pathname === "/purchase-orders" ? "active" : ""}>
 	 <Link to="/purchase-orders">
   	 	<FaShoppingCart /> Purchase Orders
  	</Link>
	</li>
	
	<li className={location.pathname === "/grn" ? "active" : ""}>
    	<Link to="/grn">
        	📦 Goods Receipt
  	  </Link>
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