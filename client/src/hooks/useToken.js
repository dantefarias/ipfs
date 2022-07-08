import { useState, useCallback } from "react";

const getToken = () => {
  const token = localStorage.getItem("token");
  const parsedToken = JSON.parse(token);
  return parsedToken ? parsedToken.token : null;
};

const useToken = () => {
  const [token, setToken] = useState(getToken());

  const saveAndSetToken = useCallback(
    (accessToken) => {
      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    },
    [setToken]
  );

  return {
    setToken: saveAndSetToken,
    token,
  };
};

export default useToken;
