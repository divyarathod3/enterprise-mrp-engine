import { useEffect, useState } from "react";
import { addPurchaseOrder } from "../services/purchaseOrderService";
import { getSuppliers } from "../services/supplierService";
import { getItems } from "../services/itemService";
import "../styles/AddPurchaseOrderForm.css";

function AddPurchaseOrderForm({ refreshOrders }) {

  const [suppliers, setSuppliers] = useState([]);
  const [items, setItems] = useState([]);

  const [order, setOrder] = useState({
    supplierCode: "",
    supplierName: "",
    itemCode: "",
    itemName: "",
    quantity: "",
    unitPrice: "",
    totalAmount: "",
    orderDate: "",
    status: "Pending"
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const supplierRes = await getSuppliers();
    const itemRes = await getItems();

    setSuppliers(supplierRes.data);
    setItems(itemRes.data);
  };

  const handleSupplier = (e) => {

    const supplier = suppliers.find(
      s => s.supplierCode === e.target.value
    );

    setOrder({
      ...order,
      supplierCode: supplier.supplierCode,
      supplierName: supplier.supplierName
    });

  };

  const handleItem = (e) => {

    const item = items.find(
      i => i.itemCode === e.target.value
    );

    setOrder({
      ...order,
      itemCode: item.itemCode,
      itemName: item.itemName,
      unitPrice: item.price,
      totalAmount:
        (order.quantity || 0) * item.price
    });

  };

  const handleChange = (e) => {

    let value = e.target.value;

    let updated = {
      ...order,
      [e.target.name]: value
    };

    if (e.target.name === "quantity") {

      updated.totalAmount =
        value * updated.unitPrice;

    }

    setOrder(updated);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await addPurchaseOrder(order);

    alert("Purchase Order Created Successfully");

    setOrder({
      supplierCode: "",
      supplierName: "",
      itemCode: "",
      itemName: "",
      quantity: "",
      unitPrice: "",
      totalAmount: "",
      orderDate: "",
      status: "Pending"
    });

    refreshOrders();

  };

  return (

    <div className="form-container">

      <h2>Create Purchase Order</h2>

      <form onSubmit={handleSubmit}>

        <select
          value={order.supplierCode}
          onChange={handleSupplier}
          required
        >

          <option value="">
            Select Supplier
          </option>

          {suppliers.map(s => (

            <option
              key={s.id}
              value={s.supplierCode}
            >

              {s.supplierCode} - {s.supplierName}

            </option>

          ))}

        </select>

        <select
          value={order.itemCode}
          onChange={handleItem}
          required
        >

          <option value="">
            Select Item
          </option>

          {items.map(i => (

            <option
              key={i.id}
              value={i.itemCode}
            >

              {i.itemCode} - {i.itemName}

            </option>

          ))}

        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={order.quantity}
          onChange={handleChange}
          required
        />

        <input
          value={order.unitPrice}
          readOnly
          placeholder="Unit Price"
        />

        <input
          value={order.totalAmount}
          readOnly
          placeholder="Total Amount"
        />

        <input
          type="date"
          name="orderDate"
          value={order.orderDate}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={order.status}
          onChange={handleChange}
        >

          <option>Pending</option>
          <option>Approved</option>
          <option>Received</option>

        </select>

        <button type="submit">
          Create Purchase Order
        </button>

      </form>

    </div>

  );

}

export default AddPurchaseOrderForm;