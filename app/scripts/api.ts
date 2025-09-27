import axios from "axios";

const api = axios.create({
  baseURL: "https://api.polygon.io/v3/",
  params: {
    apiKey: process.env.EXPO_API_KEY,
  },
});

export default api;
