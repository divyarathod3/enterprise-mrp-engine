import { useEffect, useState } from "react";
import {
  getGoodsReceipts,
  deleteGoodsReceipt
} from "../services/goodsReceiptService";

import "../styles/GoodsReceiptTable.css";

function GoodsReceiptTable({ refresh }) {

  const [receipts, setReceipts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadReceipts();
  }, []);

  useEffect(() => {
    loadReceipts();
  }, [refresh]);

  const loadReceipts = async () => {
    const response = await getGoodsReceipts();
    setReceipts(response.data);
  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete this GRN?")) {

      await deleteGoodsReceipt(id);

      loadReceipts();

    }

  };

  return (

    <div className="table-container">

      <h2>Goods Receipt History</h2>

      <input
        className="search-box"
        placeholder="Search GRN..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>

          <tr>

            <th>GRN</th>
            <th>PO</th>
            <th>Supplier</th>
            <th>Item</th>
            <th>Received Qty</th>
            <th>Date</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {receipts
            .filter(r =>
              r.grnCode.toLowerCase().includes(search.toLowerCase()) ||
              r.itemName.toLowerCase().includes(search.toLowerCase()) ||
              r.supplierName.toLowerCase().includes(search.toLowerCase())
            )
            .map(r => (

              <tr key={r.id}>

                <td>{r.grnCode}</td>

                <td>{r.poCode}</td>

                <td>{r.supplierName}</td>

                <td>{r.itemName}</td>

                <td>{r.receivedQuantity}</td>

                <td>{r.receivedDate}</td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(r.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

        </tbody>

      </table>

    </div>

  );

}

export default GoodsReceiptTable;