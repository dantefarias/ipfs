const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');
const { validateApiKey, saveRequest } = require('./middlewares');

const app = express();

app.use(validateApiKey);

app.use(createProxyMiddleware({
  target: config.IPFS_URL,
  onProxyReq: saveRequest,
  changeOrigin: true,
}));

module.exports = app;
