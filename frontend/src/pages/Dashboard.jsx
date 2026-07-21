import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import InventoryTable from "../components/InventoryTable";
import { getItems } from "../services/itemService";
import "../styles/Dashboard.css";

function Dashboard() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <div className="cards">

          <StatCard
            title="Total Items"
            value={items.length}
          />

          <StatCard
            title="Low Stock"
            value="12"
          />

          <StatCard
            title="Suppliers"
            value="18"
          />

          <StatCard
            title="Orders Today"
            value="27"
          />

        </div>

        <InventoryTable />

      </div>

    </div>
  );
}

export default Dashboard;