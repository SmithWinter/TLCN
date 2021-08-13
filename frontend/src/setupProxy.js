const { createProxyMiddleware } = require('http-proxy-middleware');
import dotenv from 'dotenv'

const PORT = process.env.PORT || 5000

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: `http://localhost:${PORT}`,
      changeOrigin: true,
    })
  );
};
