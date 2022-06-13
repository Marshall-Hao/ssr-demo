import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:3000/api",
});

// *.interceptors
req.interceptors.response.use((res) => {
  return res.data;
});

// * Home
export const fetchHome = () => req.get("/home");

export const fetchUser = () => req.get("/user");
