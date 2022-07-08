const uuidAPIKey = require("uuid-apikey");

const logger = require("../logger");
const { ApiKey } = require("../models/apiKey");

const getKeys = () => ApiKey.find();

const createKey = async (createdBy) => {
  const { apiKey } = uuidAPIKey.create();
  const key = new ApiKey({
    id: apiKey,
    createdBy,
    creationDate: new Date(),
  });
  await key.save();
  logger.info(`Api key ${apiKey} created successfully`);
  return key;
};

const disableKey = async (id) => {
  const key = await ApiKey.findOne({ id });
  if (!key) {
    throw new Error(`"${id}" is an invalid key`);
  }
  key.set({ disabled: true });
  await key.save();
  logger.info(`Api key ${id} disabled successfully`);
  return key;
};

const self = {
  createKey,
  disableKey,
  getKeys,
};

module.exports = self;
