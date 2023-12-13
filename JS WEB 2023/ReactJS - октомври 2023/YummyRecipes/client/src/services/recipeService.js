const baseUrl = "http://localhost:3030/data/recipes";
import * as request from "../library/request";

export const create = async (recipeData) => {
  const result = await request.post(baseUrl, recipeData);

  return result;
};
