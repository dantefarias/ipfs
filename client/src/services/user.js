import api from "../api";

export const signup = ({ email, password }) =>
  api.post("/user/signup", {
    email,
    password,
  });

export const login = ({ email, password }) =>
  api.post("/user/signin", {
    email,
    password,
  });
