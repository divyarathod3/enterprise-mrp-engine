import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";
import { getItems } from "../services/itemService";
import "../styles/InventoryPage.css";

function InventoryPage() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(search.toLowerCase()) ||
    item.itemCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Header />

        <AddItemForm refreshItems={loadItems} />

        <input
          type="text"
          placeholder="Search Item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "20px 0",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <InventoryTable
          items={filteredItems}
          refreshItems={loadItems}
        />

      </div>

    </div>
  );
}

export default InventoryPage;