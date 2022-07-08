const mongoose = require("mongoose");

const config = require("./config");
const logger = require("./logger");
const app = require("./app");

const start = async () => {
  if (!config.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!config.MONGO.DB || !config.MONGO.HOST || !config.MONGO.PORT) {
    throw new Error("MONGO_DB, MONGO_HOST and MONGO_PORT must be defined");
  }

  const mongoConnectionString = `mongodb://${config.MONGO.HOST}:${config.MONGO.PORT}/${config.MONGO.DB}`;
  try {
    await mongoose.connect(mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Connection with Mongo established");
  } catch (err) {
    logger.error(err);
  }

  app.listen(config.PORT, () => {
    logger.info(`IPFS server listening on port ${config.PORT}`);
  });
};

start();
