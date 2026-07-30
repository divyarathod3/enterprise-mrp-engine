import { useState } from "react";
import "../styles/AddSalesOrderForm.css";

function AddSalesOrderForm() {

  const [form, setForm] = useState({
    customerName: "",
    itemCode: "",
    itemName: "",
    quantity: "",
    orderDate: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Sales Order Backend will be connected tomorrow.");

    setForm({
      customerName: "",
      itemCode: "",
      itemName: "",
      quantity: "",
      orderDate: ""
    });
  };

  return (
    <div className="form-card">

      <h2>Create Sales Order</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="customerName"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={handleChange}
        />

        <input
          name="itemCode"
          placeholder="Item Code"
          value={form.itemCode}
          onChange={handleChange}
        />

        <input
          name="itemName"
          placeholder="Item Name"
          value={form.itemName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <input
          type="date"
          name="orderDate"
          value={form.orderDate}
          onChange={handleChange}
        />

        <button>Create Order</button>

      </form>

    </div>
  );
}

export default AddSalesOrderForm;