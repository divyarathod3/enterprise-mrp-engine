import axios from "axios";

const API_URL = "http://localhost:8081/api/purchase-orders";

export const getPurchaseOrders = () => axios.get(API_URL);

export const addPurchaseOrder = (order) =>
  axios.post(API_URL, order);

export const updatePurchaseOrder = (id, order) =>
  axios.put(`${API_URL}/${id}`, order);

export const deletePurchaseOrder = (id) =>
  axios.delete(`${API_URL}/${id}`);