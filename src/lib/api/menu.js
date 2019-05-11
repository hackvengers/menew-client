import defaultClient from "lib/defaultClient";

export const getOcrBoundingBox = ({ photo }) => {
  return defaultClient.post("/menu");
};

export const getMenuText = ({ query, target }) => {
  return defaultClient.post("/menu/text");
};
