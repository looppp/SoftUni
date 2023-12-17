import * as request from "../library/request";
const baseUrl = "http://localhost:3030/data/comments";

export const create = async (recipeId, text) => {
  const newComment = await request.post(baseUrl, {
    recipeId,
    text,
  });

  return newComment;
};

export const getAll = async (recipeId) => {
  const query = new URLSearchParams({
    where: `recipeId="${recipeId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};
