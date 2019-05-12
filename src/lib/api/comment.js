import defaultClient from "lib/defaultClient";

export const writeComment = ({ content }) => {
  return defaultClient.post("/comment", { content });
};

export const listComment = () => {
  return defaultClient.post("/comment/list");
};
