import axios from "axios";

export const getFoodImg = ({
  sourceFoodName,
  targetFoodName,
  sourceLang,
  targetLang
}) => {
  return axios.put("http://106.10.50.141:5000/getFoodImg", {
    sourceFoodName,
    targetFoodName,
    sourceLang,
    targetLang
  });
};
