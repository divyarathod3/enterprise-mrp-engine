import {
FaHome,
FaBoxes,
FaTruck,
FaShoppingCart,
FaChartBar,
FaCog
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar(){

return(

<div className="sidebar">

<h2>MRP Engine</h2>

<ul>

<li><FaHome/> Dashboard</li>

<li><FaBoxes/> Inventory</li>

<li><FaTruck/> Suppliers</li>

<li><FaShoppingCart/> Orders</li>

<li><FaChartBar/> Reports</li>

<li><FaCog/> Settings</li>

</ul>

</div>

)

}

export default Sidebar;