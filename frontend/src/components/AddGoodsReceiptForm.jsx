import { useEffect, useState } from "react";

import { getPurchaseOrders } from "../services/purchaseOrderService";
import { addGoodsReceipt } from "../services/goodsReceiptService";

import "../styles/AddGoodsReceiptForm.css";

function AddGoodsReceiptForm({ refreshGRN }) {

  const [orders, setOrders] = useState([]);

  const [receipt, setReceipt] = useState({
    poCode: "",
    supplierName: "",
    itemCode: "",
    itemName: "",
    orderedQuantity: "",
    receivedQuantity: "",
    receivedDate: ""
  });

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    const response = await getPurchaseOrders();

    setOrders(response.data);

  };

  const handlePO = (e) => {

    const po = orders.find(
      order => order.poCode === e.target.value
    );

    setReceipt({

      ...receipt,

      poCode: po.poCode,
      supplierName: po.supplierName,
      itemCode: po.itemCode,
      itemName: po.itemName,
      orderedQuantity: po.quantity

    });

  };

  const handleChange = (e) => {

    setReceipt({

      ...receipt,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await addGoodsReceipt(receipt);

    alert("Goods Received Successfully!");

    refreshGRN();

    setReceipt({

      poCode: "",
      supplierName: "",
      itemCode: "",
      itemName: "",
      orderedQuantity: "",
      receivedQuantity: "",
      receivedDate: ""

    });

  };

  return (

    <div className="form-container">

      <h2>Goods Receipt Note</h2>

      <form onSubmit={handleSubmit}>

        <select
          value={receipt.poCode}
          onChange={handlePO}
          required
        >

          <option value="">
            Select Purchase Order
          </option>

          {orders.map(po => (

            <option
              key={po.id}
              value={po.poCode}
            >

              {po.poCode}

            </option>

          ))}

        </select>

        <input
          value={receipt.supplierName}
          readOnly
          placeholder="Supplier"
        />

        <input
          value={receipt.itemName}
          readOnly
          placeholder="Item"
        />

        <input
          value={receipt.orderedQuantity}
          readOnly
          placeholder="Ordered Qty"
        />

        <input
          type="number"
          name="receivedQuantity"
          placeholder="Received Qty"
          value={receipt.receivedQuantity}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="receivedDate"
          value={receipt.receivedDate}
          onChange={handleChange}
          required
        />

        <button type="submit">

          Receive Goods

        </button>

      </form>

    </div>

  );

}

export default AddGoodsReceiptForm;