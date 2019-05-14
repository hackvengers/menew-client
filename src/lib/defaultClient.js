import axios from "axios";

const defaultClient = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}/api/`
});

export default defaultClient;
