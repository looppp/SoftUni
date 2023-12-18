const baseUrl = "http://localhost:3030/data/profile";
import * as request from "../library/request";

export const createProfile = async (profileData) => {
  const result = await request.post(baseUrl, profileData);

  return result;
};

export const editProfile = async (profileId, profileData) => {
  const result = await request.put(`${baseUrl}/${profileId}`, profileData);

  return result;
};

export const getProfile = async (userId) => {
  const result = await request.get(baseUrl);

  return result.filter((x) => x._ownerId === userId);
};
