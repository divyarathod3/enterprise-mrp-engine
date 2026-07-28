import axios from "axios";

const API_URL = "http://localhost:8081/api/suppliers";

export const getSuppliers = () => {
  return axios.get(API_URL);
};

export const addSupplier = (supplier) => {
  return axios.post(API_URL, supplier);
};

export const updateSupplier = (id, supplier) => {
  return axios.put(`${API_URL}/${id}`, supplier);
};

export const deleteSupplier = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};