import API from "../api/itemApi";

export const getItems = () => API.get("/items");

export const addItem = (item) => API.post("/items", item);

export const updateItem = (id, item) => API.put(`/items/${id}`, item);

export const deleteItem = (id) => API.delete(`/items/${id}`);