const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.wolframalpha.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/br',
    createProxyMiddleware({
      target: 'http://api.brainshop.ai',
      changeOrigin: true,
    })
  );
};