import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import useToken from "./hooks/useToken";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

const App = () => {
  const { token, setToken } = useToken();

  return (
    <>
      <Header />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route
              path="/signup"
              element={
                token ? <Navigate to="/dashboard" replace /> : <Signup />
              }
            />
            <Route
              path="/login"
              element={
                token ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login setToken={setToken} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={token ? <Dashboard /> : <Navigate to="/login" replace />}
            />
            <Route
              path="*"
              element={
                token ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
