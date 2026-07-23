import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";

function InventoryPage() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <h2>Inventory Management</h2>

        <AddItemForm />

        <InventoryTable />

      </div>

    </div>
  );
}

export default InventoryPage;