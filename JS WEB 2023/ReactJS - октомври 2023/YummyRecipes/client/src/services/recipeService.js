const baseUrl = "http://localhost:3030/data/recipes";
import * as request from "../library/request";

export const create = async (recipeData) => {
  const result = await request.post(baseUrl, recipeData);

  return result;
};

export const edit = async (recipeId, recipeData) => {
  const result = await request.put(`${baseUrl}/${recipeId}`, recipeData);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (recipeId) => {
  const result = await request.get(`${baseUrl}/${recipeId}`);

  return result;
};
