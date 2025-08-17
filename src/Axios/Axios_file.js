import axios from "axios";

const Instance = axios.create({
  baseURL: "https://foodcart-backend-32f9.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Instance;