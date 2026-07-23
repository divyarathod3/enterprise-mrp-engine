import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import RecentInventory from "../components/RecentInventory";
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

  const totalItems = items.length;

  const lowStock = items.filter(
    (item) => item.quantity < 10
  ).length;

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <div className="cards">

          <StatCard
            title="Total Items"
            value={totalItems}
          />

          <StatCard
            title="Low Stock"
            value={lowStock}
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

        <RecentInventory />

      </div>

    </div>
  );
}

export default Dashboard;