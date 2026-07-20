import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import InventoryTable from "../components/InventoryTable";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <div className="cards">

          <StatCard
            title="Total Items"
            value="150"
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