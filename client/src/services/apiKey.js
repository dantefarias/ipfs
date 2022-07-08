import api from "../api";

const addToken = () => {
  const token = sessionStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createKey = () =>
  api.post(
    "/key",
    {},
    {
      headers: addToken(),
    }
  );

export const getKeys = () =>
  api.get("/key", {
    headers: addToken(),
  });

export const disableKey = (id) =>
  api.post(
    "/key/disable",
    { id },
    {
      headers: addToken(),
    }
  );
