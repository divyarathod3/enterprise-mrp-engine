import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/SalesOrderPage.css";
import axios from "axios";

const API = "http://localhost:8081/api";

function SalesOrderPage() {

    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);

    const [form, setForm] = useState({
        customerId: "",
        itemId: "",
        quantity: "",
        orderDate: ""
    });

    useEffect(() => {
        loadCustomers();
        loadItems();
        loadOrders();
    }, []);

    const loadCustomers = async () => {
        const res = await axios.get(`${API}/customers`);
        setCustomers(res.data);
    };

    const loadItems = async () => {
        const res = await axios.get(`${API}/items`);
        setItems(res.data);
    };

    const loadOrders = async () => {
        const res = await axios.get(`${API}/sales-orders`);
        setOrders(res.data);
    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(`${API}/sales-orders`, {
                customerId: Number(form.customerId),
                itemId: Number(form.itemId),
                quantity: Number(form.quantity),
                orderDate: form.orderDate
            });

            alert("Sales Order Created");

            loadOrders();

            setForm({
                customerId: "",
                itemId: "",
                quantity: "",
                orderDate: ""
            });

        } catch (err) {

            console.log(err);

            alert("Unable to create Sales Order");

        }

    };

    const deleteOrder = async (id) => {

        if (!window.confirm("Delete Sales Order?"))
            return;

        await axios.delete(`${API}/sales-orders/${id}`);

        loadOrders();

    };

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="dashboard-content">

                <h1 className="page-title">
                    Sales Order Management
                </h1>

                <div className="card">

                    <h2>Create Sales Order</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <select
                                name="customerId"
                                value={form.customerId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Customer</option>

                                {customers.map(customer => (

                                    <option
                                        key={customer.id}
                                        value={customer.id}
                                    >

                                        {customer.customerName}

                                    </option>

                                ))}

                            </select>

                            <select
                                name="itemId"
                                value={form.itemId}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Item
                                </option>

                                {items.map(item => (

                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >

                                        {item.itemName}

                                    </option>

                                ))}

                            </select>

                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                value={form.quantity}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="date"
                                name="orderDate"
                                value={form.orderDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button
                            className="btn-primary"
                            type="submit"
                        >

                            Create Order

                        </button>

                    </form>

                </div>

                <div className="card">

                    <h2>Sales Orders</h2>

                    <table className="data-table">

                        <thead>

                        <tr>

                            <th>SO Code</th>

                            <th>Customer</th>

                            <th>Item</th>

                            <th>Qty</th>

                            <th>Price</th>

                            <th>Date</th>

                            <th>Action</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            orders.length === 0 ?

                            (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="no-data"
                                    >

                                        No Sales Orders

                                    </td>

                                </tr>

                            )

                            :

                            (

                                orders.map(order => (

                                    <tr key={order.id}>

                                        <td>
                                            {order.salesOrderCode}
                                        </td>

                                        <td>
                                            {order.customer?.customerName}
                                        </td>

                                        <td>
                                            {order.item?.itemName}
                                        </td>

                                        <td>
                                            {order.quantity}
                                        </td>

                                        <td>
                                            ₹ {order.price}
                                        </td>

                                        <td>
                                            {order.orderDate}
                                        </td>

                                        <td>

                                            <button
                                                className="btn-delete"
                                                onClick={() => deleteOrder(order.id)}
                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            )

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default SalesOrderPage;