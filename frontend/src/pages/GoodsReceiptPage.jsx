import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import AddGoodsReceiptForm from "../components/AddGoodsReceiptForm";
import GoodsReceiptTable from "../components/GoodsReceiptTable";

function GoodsReceiptPage() {

  const [refresh, setRefresh] = useState(false);

  const reload = () => {

    setRefresh(!refresh);

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <AddGoodsReceiptForm
          refreshGRN={reload}
        />

        <GoodsReceiptTable
          refresh={refresh}
        />

      </div>

    </div>

  );

}

export default GoodsReceiptPage;