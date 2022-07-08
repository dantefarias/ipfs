const logger = require('../logger');
const { Request } = require("../models/request");
const { ApiKey } = require("../models/apiKey");

const validateApiKey = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) {
      throw new Error('Token is missing');
    }
    
    const apiKey = authToken.split(' ')[1];
    if (!apiKey) {
      throw new Error('API key is missing');
    }

    const key = await ApiKey.findOne({ id: apiKey });
    if (!key) {
      throw new Error('API key not found or it is invalid');
    }

    if (key.disabled) {
      throw new Error(`Key ${apiKey} is disabled`);
    }

    res.locals.apiKey = key;
    next();
  } catch (err) {
    logger.error(err.message);
    res.status(401).send({ message: err.message });
  }  
};

const saveRequest = async (proxyRequest, req, res) => {
  const { apiKey } = res.locals; 
  const { method, path } = req;

  const bytes = req.headers['content-length'] || 0; 
  try {
    const request = new Request({
      apiKey: apiKey._id,
      method,
      path,
      bytes,
      createdAt: new Date(),
    })
    await request.save();

    await ApiKey.findOneAndUpdate(
      { _id: apiKey._id },
      { $push: { requests: request._id } }
    )
    logger.info(`Sending ${bytes} bytes from ${method} ${path} request`);
  } catch (err) {
    logger.error(err.message);
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  validateApiKey,
  saveRequest,
}