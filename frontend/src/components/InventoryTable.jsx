import "../styles/InventoryTable.css";

function InventoryTable(){

return(

<div className="table-container">

<h2>Inventory</h2>

<table>

<thead>

<tr>

<th>Code</th>

<th>Name</th>

<th>Quantity</th>

<th>Price</th>

<th>Status</th>

</tr>

</thead>

<tbody>

<tr>

<td>ITM001</td>

<td>Laptop</td>

<td>15</td>

<td>65000</td>

<td>Available</td>

</tr>

<tr>

<td>ITM002</td>

<td>Keyboard</td>

<td>40</td>

<td>1200</td>

<td>Available</td>

</tr>

<tr>

<td>ITM003</td>

<td>Mouse</td>

<td>8</td>

<td>600</td>

<td>Low Stock</td>

</tr>

</tbody>

</table>

</div>

)

}

export default InventoryTable;