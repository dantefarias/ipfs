const routes = require("express").Router();

const logger = require("../logger");
const userController = require("../controllers/user");

const signUp = (req, res) => {
  const { email, password } = req.body;
  return userController
    .signUp({ email, password })
    .then((response) => res.status(201).send(response))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).send({ error: err.message });
    });
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  return userController
    .signIn({ email, password })
    .then((response) => res.status(200).send(response))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).send({ message: err.message });
    });
};

routes.post("/signin", signIn);
routes.post("/signup", signUp);

module.exports = routes;
