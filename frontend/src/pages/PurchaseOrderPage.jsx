import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import AddPurchaseOrderForm from "../components/AddPurchaseOrderForm";
import PurchaseOrderTable from "../components/PurchaseOrderTable";

function PurchaseOrderPage() {

  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <AddPurchaseOrderForm
          refreshOrders={reload}
        />

        <PurchaseOrderTable
          refresh={refresh}
        />

      </div>

    </div>

  );

}

export default PurchaseOrderPage;