import { useEffect, useState } from "react";
import {
  getItems,
  deleteItem
} from "../services/itemService";

import EditItemModal from "./EditItemModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

import "../styles/InventoryTable.css";

function InventoryTable() {

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("itemCode");

  const [selectedItem, setSelectedItem] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {

      const response = await getItems();

      setItems(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  const openDeleteModal = (id) => {

    setDeleteId(id);

    setShowDeleteModal(true);

  };

  const confirmDelete = async () => {

    try {

      await deleteItem(deleteId);

      loadItems();

      setShowDeleteModal(false);

      alert("Item Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const filteredItems = items

    .filter((item) =>
      item.itemName.toLowerCase().includes(search.toLowerCase()) ||
      item.itemCode.toLowerCase().includes(search.toLowerCase())
    )

    .sort((a, b) => {

      if (sortBy === "itemName")
        return a.itemName.localeCompare(b.itemName);

      if (sortBy === "price")
        return a.price - b.price;

      if (sortBy === "quantity")
        return a.quantity - b.quantity;

      return a.itemCode.localeCompare(b.itemCode);

    });

  return (

    <div className="table-container">

      <h2>📦 Inventory List</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >

        <input

          type="text"

          placeholder="Search by Item Code or Item Name..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="search-box"

        />

        <select

          value={sortBy}

          onChange={(e) => setSortBy(e.target.value)}

          className="search-box"

        >

          <option value="itemCode">Sort : Item Code</option>

          <option value="itemName">Sort : Item Name</option>

          <option value="price">Sort : Price</option>

          <option value="quantity">Sort : Quantity</option>

        </select>

      </div>

      <table>

        <thead>

          <tr>

            <th>Code</th>

            <th>Name</th>

            <th>Description</th>

            <th>Quantity</th>

            <th>Price</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredItems.map((item) => (

            <tr key={item.id}>

              <td>{item.itemCode}</td>

              <td>{item.itemName}</td>

              <td>{item.description}</td>

              <td>{item.quantity}</td>

              <td>₹ {item.price}</td>

              <td>

                {item.quantity === 0 ? (

                  <span
                    style={{
                      color: "white",
                      background: "#dc3545",
                      padding: "5px 10px",
                      borderRadius: "5px"
                    }}
                  >
                    Out of Stock
                  </span>

                ) : item.quantity < 10 ? (

                  <span
                    style={{
                      color: "white",
                      background: "#ffc107",
                      padding: "5px 10px",
                      borderRadius: "5px"
                    }}
                  >
                    Low Stock
                  </span>

                ) : (

                  <span
                    style={{
                      color: "white",
                      background: "#198754",
                      padding: "5px 10px",
                      borderRadius: "5px"
                    }}
                  >
                    Available
                  </span>

                )}

              </td>

              <td>

                <button

                  className="edit-btn"

                  onClick={() => {

                    setSelectedItem(item);

                    setShowEditModal(true);

                  }}

                >

                  ✏ Edit

                </button>

                <button

                  className="delete-btn"

                  onClick={() => openDeleteModal(item.id)}

                >

                  🗑 Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {showEditModal && (

        <EditItemModal

          item={selectedItem}

          onClose={() => setShowEditModal(false)}

          onSuccess={loadItems}

        />

      )}

      {showDeleteModal && (

        <DeleteConfirmModal

          onCancel={() => setShowDeleteModal(false)}

          onDelete={confirmDelete}

        />

      )}

    </div>

  );

}

export default InventoryTable;