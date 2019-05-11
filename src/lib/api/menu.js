import axios from "axios";
import defaultClient from "lib/defaultClient";

export const getOcrBoundingBox = ({ formData }) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/api/menu",
    data: formData,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });
};

export const getMenuText = ({ query, target }) => {
  return defaultClient.post("/menu/text", { query, target });
};
