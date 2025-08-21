import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4040", 
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Create new product
export const createProduct = (productData) =>
  API.post("/products/create", productData);

// Get all products
export const getProducts = () => API.get("/products");
