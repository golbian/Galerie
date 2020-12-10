import axios from "./node_modules/axios/dist/axios.js"

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});
