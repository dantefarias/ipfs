const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD - HH:mm:ss' }),
    format.printf(info => `Proxy - ${info.timestamp} - ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
  ]
});