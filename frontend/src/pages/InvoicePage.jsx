import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/InvoicePage.css";

import axios from "axios";

import {
    getInvoices,
    createInvoice,
    deleteInvoice
} from "../services/invoiceService";

function InvoicePage() {

    const [salesOrders, setSalesOrders] = useState([]);
    const [invoices, setInvoices] = useState([]);

    const [selectedOrder, setSelectedOrder] = useState(null);


    const [form, setForm] = useState({

        salesOrderId: "",
        invoiceDate: ""

    });

    useEffect(() => {

        loadSalesOrders();
        loadInvoices();

    }, []);

const loadSalesOrders = async () => {

    try {

        const res = await axios.get("http://localhost:8081/api/sales-orders");

        console.log("Sales Orders:", res.data);

        setSalesOrders(res.data);

    } catch (err) {

        console.log(err);

    }

};    const loadInvoices = async () => {

        try {

            const res = await getInvoices();

            setInvoices(res.data);

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

        if (name === "salesOrderId") {

            const order = salesOrders.find(

                o => o.id === Number(value)

            );

            setSelectedOrder(order);

        }

    };
const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await createInvoice(form);

        alert("Invoice Generated Successfully");

        loadInvoices();

        setForm({

            salesOrderId: "",
            invoiceDate: ""

        });

        setSelectedOrder(null);

    } catch (err) {

        console.log(err);

        alert("Unable to Generate Invoice");

    }

};

const removeInvoice = async (id) => {

    if (!window.confirm("Delete Invoice?")) {
        return;
    }

    await deleteInvoice(id);

    loadInvoices();

};  
  return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="dashboard-content">

                <h1 className="page-title">
                    Invoice Management
                </h1>

                <div className="card">

                    <h2>Generate Invoice</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                           <select
    name="salesOrderId"
    value={form.salesOrderId}
    onChange={handleChange}
    required
>
    <option value="">
        Select Sales Order
    </option>

    {salesOrders.map((order) => (
        <option
            key={order.id}
            value={order.id}
        >
            {order.salesOrderCode}
        </option>
    ))}
</select>
                                 

                            <input
                                type="date"
                                name="invoiceDate"
                                value={form.invoiceDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {

                            selectedOrder && (

                                <div className="stock-box">

                                    <div>

                                        <strong>Customer</strong>

                                        <p>{selectedOrder.customer?.customerName}</p>

                                    </div>

                                    <div>

                                        <strong>Item</strong>

                                        <p>{selectedOrder.item?.itemName}</p>

                                    </div>

                                    <div>

                                        <strong>Quantity</strong>

                                        <p>{selectedOrder.quantity}</p>

                                    </div>

                                    <div>

                                        <strong>Price</strong>

                                        <p>₹ {selectedOrder.price}</p>

                                    </div>

                                    <div>

                                        <strong>GST (18%)</strong>

                                        <p>

                                            ₹ {

                                                (
                                                    selectedOrder.price *
                                                    selectedOrder.quantity *
                                                    0.18
                                                ).toFixed(2)

                                            }

                                        </p>

                                    </div>

                                    <div>

                                        <strong>Total</strong>

                                        <p>

                                            ₹ {

                                                (

                                                    selectedOrder.price *
                                                    selectedOrder.quantity *

                                                    1.18

                                                ).toFixed(2)

                                            }

                                        </p>

                                    </div>

                                </div>

                            )

                        }

                        <button
                            className="btn-primary"
                            type="submit"
                        >

                            Generate Invoice

                        </button>

                    </form>

                </div>

                <div className="card">

                    <h2>Invoices</h2>

                    <table className="data-table">

                        <thead>

                            <tr>

                                <th>Invoice</th>

                                <th>Sales Order</th>

                                <th>Customer</th>

                                <th>GST</th>

                                <th>Total</th>

                                <th>Date</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                invoices.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="no-data"
                                        >

                                            No Invoice Generated

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    invoices.map(invoice => (

                                        <tr key={invoice.id}>

                                            <td>

                                                {invoice.invoiceCode}

                                            </td>

                                            <td>

                                                {invoice.salesOrder?.salesOrderCode}

                                            </td>

                                            <td>

                                                {invoice.salesOrder?.customer?.customerName}

                                            </td>

                                            <td>

                                                ₹ {invoice.gst}

                                            </td>

                                            <td>

                                                ₹ {invoice.total}

                                            </td>

                                            <td>

                                                {invoice.invoiceDate}

                                            </td>

                                            <td>

                                                <button
                                                    className="btn-delete"
                                                    onClick={() =>
                                                        removeInvoice(invoice.id)
                                                    }
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

export default InvoicePage;