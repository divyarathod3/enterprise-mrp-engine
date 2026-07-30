import Sidebar from "../components/Sidebar";
import AddSalesOrderForm from "../components/AddSalesOrderForm";
import SalesOrderTable from "../components/SalesOrderTable";
import "../styles/SalesOrderPage.css";

function SalesOrderPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Sales Order Management</h1>

        <AddSalesOrderForm />

        <SalesOrderTable />
      </div>
    </div>
  );
}

export default SalesOrderPage;