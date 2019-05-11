import axios from "axios";

const defaultClient = axios.create({
  baseURL: "http://106.10.50.141:8000/api/"
});

export default defaultClient;
