import { useState } from "react";
import { addSupplier } from "../services/supplierService";

function AddSupplierForm() {

  const [supplier, setSupplier] = useState({
    supplierName: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addSupplier(supplier);

      alert("Supplier Added Successfully");

      setSupplier({
        supplierName: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: ""
      });

    } catch (error) {

      console.error(error);

      alert("Failed to Add Supplier");

    }
  };

  return (

    <div className="form-container">

      <h2>Add Supplier</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="supplierName"
          placeholder="Supplier Name"
          value={supplier.supplierName}
          onChange={handleChange}
          required
        />

        <input
          name="contactPerson"
          placeholder="Contact Person"
          value={supplier.contactPerson}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={supplier.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={supplier.email}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          value={supplier.address}
          onChange={handleChange}
        />

        <button type="submit">
          Save Supplier
        </button>

      </form>

    </div>

  );

}

export default AddSupplierForm;