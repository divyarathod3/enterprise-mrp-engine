import axios from "axios";

const API_URL = "http://localhost:8081/api/sales-orders";

export const getSalesOrders = () => {
    return axios.get(API_URL);
};

export const createSalesOrder = (salesOrder) => {
    return axios.post(API_URL, salesOrder);
};

export const deleteSalesOrder = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};