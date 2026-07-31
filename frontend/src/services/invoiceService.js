import axios from "axios";

const API_URL = "http://localhost:8081/api/invoices";

export const getInvoices = () => axios.get(API_URL);

export const addInvoice = (invoice) =>
  axios.post(API_URL, invoice);

export const updateInvoice = (id, invoice) =>
  axios.put(`${API_URL}/${id}`, invoice);

export const deleteInvoice = (id) =>
  axios.delete(`${API_URL}/${id}`);