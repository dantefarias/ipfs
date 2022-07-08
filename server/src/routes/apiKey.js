const routes = require("express").Router();

const logger = require("../logger");
const verifyToken = require("../middlewares/auth");
const apiKeyController = require("../controllers/apiKey");

const createApiKey = (req, res) => {
  const { userId } = req;
  return apiKeyController
    .createKey(userId)
    .then((response) => res.status(201).send(response))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).send({ message: err.message });
    });
};

const disableApiKey = (req, res) => {
  const { id } = req.body;
  return apiKeyController
    .disableKey(id)
    .then((response) => res.status(200).send(response))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).send({ message: err.message });
    });
};

const getApiKeys = (_, res) =>
  apiKeyController
    .getKeys()
    .then((response) => res.status(200).send(response))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).send({ message: err.message });
    });

routes.get("/", [verifyToken], getApiKeys);
routes.post("", [verifyToken], createApiKey);
routes.post("/disable", [verifyToken], disableApiKey);

module.exports = routes;
