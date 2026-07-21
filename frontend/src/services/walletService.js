import axios from "axios";

const API = "http://localhost:8080/api";

export const getAllTransactions = () => {
    return axios.get(`${API}/transactions`);
};

export const addTransaction = (data) => {
    return axios.post(`${API}/transactions`, data);
};

export const deleteTransaction = (id) => {
    return axios.delete(`${API}/transactions/${id}`);
};