// import http from "../http-common.js";

class SubscribeServices {
  getAllSubscribe() {
    return fetch("http://localhost:8081/api/subscribe");
  }

  getSubscribe(title) {
    return fetch(`http://localhost:8081/api/subscribe/${title}`);
  }

  createSubscribe(data) {
    console.log(data)
    return fetch("http://localhost:8081/api/subscribe",{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    })
  }

  updateSubscribe(data) {
    return fetch(`http://localhost:8081/api/subscribe/${data.title}`, data);
  }

  deleteSubscribe(id) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`);
  }
}

export default new SubscribeServices();