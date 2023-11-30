const baseUrl = "http://localhost:3030/jsonstore/games";
import * as request from "../components/lib/request";

export const create = async (gameData) => {
  const result = await request.post(baseUrl, gameData);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const getOne = async (gameId) => {
  const result = await request.get(`${baseUrl}/${gameId}`);
  return result;
};
