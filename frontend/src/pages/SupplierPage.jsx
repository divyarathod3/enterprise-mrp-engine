import Sidebar from "../components/Sidebar";
import AddSupplierForm from "../components/AddSupplierForm";
import SupplierTable from "../components/SupplierTable";

function SupplierPage() {

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
          Supplier Management
        </h1>

        <AddSupplierForm />

        <SupplierTable />

      </div>

    </div>

  );

}

export default SupplierPage;