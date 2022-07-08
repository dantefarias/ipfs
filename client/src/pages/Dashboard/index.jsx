import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState, useEffect, useCallback } from "react";

import ErrorBar from "../../components/ErrorBar";
import { getKeys, disableKey, createKey } from "../../services/apiKey";

import CollapsibleTable from "./Table";

import "./Dashboard.css";

const Dashboard = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setLoading(true);
    getKeys()
      .then(({ data: keys }) => {
        setKeys(keys);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setLoading, setKeys, setError]);

  const disableApiKey = useCallback(
    (id) =>
      disableKey(id)
        .then(({ data: disabledKey }) => {
          const index = keys.findIndex((key) => key.id === id);
          const keysCopy = [...keys];
          keysCopy[index] = disabledKey;
          setKeys(keysCopy);
        })
        .catch((err) =>
          setError(
            err.response
              ? err.response.data.error || err.response.data.message
              : err.message
          )
        ),
    [keys, setKeys, setError]
  );

  const createApiKey = useCallback(
    () =>
      createKey()
        .then(({ data }) => {
          const updatedKeys = [...keys, data];
          setKeys(updatedKeys);
        })
        .catch((err) =>
          setError(
            err.response
              ? err.response.data.error || err.response.data.message
              : err.message
          )
        ),
    [keys, setKeys, setError]
  );

  return (
    <div className="dashboard-container">
      {error && <ErrorBar message={error} handleClose={() => setError(null)} />}

      {loading ? (
        <CircularProgress />
      ) : (
        <CollapsibleTable rows={keys} disableKey={disableApiKey} />
      )}
      <div className="button-container">
        <Button onClick={createApiKey} variant="contained">
          Create API key
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
