import { useEffect, useState } from "react";
import { getSuppliers } from "../services/supplierService";

function SupplierTable() {

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {

    const response = await getSuppliers();

    setSuppliers(response.data);

  };

  return (

    <div className="table-container">

      <h2>Supplier List</h2>

      <table>

        <thead>

          <tr>

            <th>Code</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>

          </tr>

        </thead>

        <tbody>

          {suppliers.map((supplier) => (

            <tr key={supplier.id}>

              <td>{supplier.supplierCode}</td>
              <td>{supplier.supplierName}</td>
              <td>{supplier.contactPerson}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>{supplier.address}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default SupplierTable;