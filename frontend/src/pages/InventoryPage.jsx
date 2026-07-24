import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";

function InventoryPage() {

  useEffect(() => {
    document.title = "Inventory Management";
  }, []);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <h1
          style={{
            marginBottom: "25px",
            color: "#1e293b"
          }}
        >
          Inventory Management
        </h1>

        <AddItemForm />

        <InventoryTable />

      </div>

    </div>
  );
}

export default InventoryPage;