// import http from "../http-common.js";

class SubscribeServices {
  getAllSubscribe() {
    return fetch("http://localhost:8080/api/subscribe");
  }

  getSubscribe(id) {
    return fetch(`http://localhost:8080/api/subscribe/${id}`);
  }

  createSubscribe(data) {
    return fetch("http://localhost:8080/api/subscribe", data);
  }

  updateSubscribe(id, data) {
    return fetch(`http://localhost:8080/apihttp://localhost:8080/api/subscribe/${id}`, data);
  }

  deleteSubscribe(id) {
    return fetch(`http://localhost:8080/api/subscribe/${id}`);
  }
}

export default new SubscribeServices();