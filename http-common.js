import axios from "./node_modules/axios/dist/axio.js"

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});
