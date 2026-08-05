import axios from "axios";

const API = "http://localhost:8081/api/invoices";

export const getInvoices = () => axios.get(API);

export const createInvoice = (invoice) => axios.post(API, invoice);

export const deleteInvoice = (id) => axios.delete(`${API}/${id}`);