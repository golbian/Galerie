// import http from "../http-common.js";

class SubscribeServices {
  getAllSubscribe() {
    return fetch("http://localhost:8081/api/subscribe");
  }

  getSubscribe(id) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`);
  }

  createSubscribe(data) {
    data = JSON.stringify(data)
    return fetch("http://localhost:8081/api/subscribe",{
      method: 'post',
      body: data,
    })
  }

  updateSubscribe(id, data) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`, data);
  }

  deleteSubscribe(id) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`);
  }
}

export default new SubscribeServices();