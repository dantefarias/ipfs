const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3002,
  MONGO: {
    DB: process.env.MONGO_DB || "ipfs",
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  JWT_KEY: process.env.JWT_KEY,
  IPFS: {
    HOST: process.env.IPFS_HOST || "localhost",
    PORT: process.env.IPFS_PORT || 5001,
    PROTOCOL: process.env.IPFS_PROTOCOL || "http",
  },
};
