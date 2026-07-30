import "../styles/SalesOrderTable.css";

function SalesOrderTable() {

  return (

    <div className="table-card">

      <h2>Sales Orders</h2>

      <table>

        <thead>

          <tr>
            <th>SO Code</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Date</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td colSpan="5">
              Backend will be connected tomorrow
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default SalesOrderTable;