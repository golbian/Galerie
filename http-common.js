import axios from "./node_modules/axios/index"

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});
