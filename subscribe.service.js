import http from "../http-common";

class SubscribeServices {
  getAllSubscribe() {
    return http.get("/subscribe");
  }

  getSubscribe(id) {
    return http.get(`/subscribe/${id}`);
  }

  createSubscribe(data) {
    return http.post("/subscribe", data);
  }

  updateSubscribe(id, data) {
    return http.put(`/subscribe/${id}`, data);
  }

  deleteSubscribe(id) {
    return http.delete(`/subscribe/${id}`);
  }
}

export default new SubscribeServices();