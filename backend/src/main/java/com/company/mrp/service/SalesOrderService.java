import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/SalesOrderPage.css";

import axios from "axios";

function SalesOrderPage() {

    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);

    const [selectedItem, setSelectedItem] = useState(null);

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

        try {

            const res = await axios.get("http://localhost:8081/api/customers");

            setCustomers(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const loadItems = async () => {

        try {

            const res = await axios.get("http://localhost:8081/api/items");

            setItems(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const loadOrders = async () => {

        try {

            const res = await axios.get("http://localhost:8081/api/sales-orders");

            setOrders(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({

            ...form,

            [name]: value

        });

        if (name === "itemId") {

            const item = items.find(

                i => i.id === Number(value)

            );

            setSelectedItem(item);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!selectedItem) {

            alert("Please select Item");

            return;

        }

        if (Number(form.quantity) > selectedItem.quantity) {

            alert("Not enough stock available");

            return;

        }

        try {

            await axios.post(

                "http://localhost:8081/api/sales-orders",

                form

            );

            alert("Sales Order Created Successfully");

            loadOrders();

            setForm({

                customerId: "",
                itemId: "",
                quantity: "",
                orderDate: ""

            });

            setSelectedItem(null);

        } catch (err) {

            console.log(err);

            alert("Error Creating Sales Order");

        }

    };

    const deleteOrder = async (id) => {

        if (!window.confirm("Delete this Sales Order?"))

            return;

        try {

            await axios.delete(

                `http://localhost:8081/api/sales-orders/${id}`

            );

            loadOrders();

        } catch (err) {

            console.log(err);

        }

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

                                <option value="">
                                    Select Customer
                                </option>

                                {

                                    customers.map(customer => (

                                        <option
                                            key={customer.id}
                                            value={customer.id}
                                        >

                                            {customer.customerCode} - {customer.customerName}

                                        </option>

                                    ))

                                }

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

                                {

                                    items.map(item => (

                                        <option
                                            key={item.id}
                                            value={item.id}
                                        >

                                            {item.itemCode} - {item.itemName}

                                        </option>

                                    ))

                                }

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

                        {

                            selectedItem && (

                                <div className="stock-box">

                                    <div>

                                        <strong>Price</strong>

                                        <p>₹ {selectedItem.price}</p>

                                    </div>

                                    <div>

                                        <strong>Available Stock</strong>

                                        <p>{selectedItem.quantity}</p>

                                    </div>

                                    <div>

                                        <strong>Description</strong>

                                        <p>{selectedItem.description}</p>

                                    </div>

                                </div>

                            )

                        }

                        <button
                            type="submit"
                            className="btn-primary"
                        >

                            Create Sales Order

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

                                <th>Quantity</th>

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

                                            No Sales Orders Found

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    orders.map(order => (

                                        <tr key={order.id}>

                                            <td>{order.salesOrderCode}</td>

                                            <td>{order.customer?.customerName}</td>

                                            <td>{order.item?.itemName}</td>

                                            <td>{order.quantity}</td>

                                            <td>₹ {order.price}</td>

                                            <td>{order.orderDate}</td>

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