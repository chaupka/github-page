const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://script.google.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove '/api' from the request path
            },
            onProxyReq: (proxyReq, req, res) => {
                console.log(`Proxying request from ${req.url} to ${proxyReq.path}`);
            },
            onProxyRes: (proxyRes, req, res) => {
                console.log(`Received response from ${proxyRes.req.path}`);
            },
        })
    );
};