import axios from "axios";

const API_URL = "http://localhost:8081/api/grn";

export const getGoodsReceipts = () => axios.get(API_URL);

export const addGoodsReceipt = (receipt) =>
  axios.post(API_URL, receipt);

export const deleteGoodsReceipt = (id) =>
  axios.delete(`${API_URL}/${id}`);