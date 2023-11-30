const baseUrl = "http://localhost:3030/jsonstore/users";

export const createUser = async (data) => {
  const body = {
    username: data.username,
    email: data.email,
    password: data.password,
    createdAt: new Date().toISOString(),
  };

  const responce = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await responce.json();
  return result;
};

export const loginUser = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
  };

  const responce = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await responce.json();
  return result;
};
