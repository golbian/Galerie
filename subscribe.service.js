// import http from "../http-common.js";

class SubscribeServices {
  getAllSubscribe() {
    return fetch("http://localhost:8081/api/subscribe");
  }

  getSubscribe(id) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
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

  updateSubscribe(id, data) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`,{
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    });
  }

  deleteSubscribe(id) {
    return fetch(`http://localhost:8081/api/subscribe/${id}`);
  }
}

export default new SubscribeServices();