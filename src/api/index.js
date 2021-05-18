import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
});

// api end points
const api = {
  post: {},
  get: {
    getTotals: () => http.get("/dashboard/all"),
  },
  put: {},
  delete: {},
};

export default api;
