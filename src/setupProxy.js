const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app =>
	app.use(
		createProxyMiddleware('/4645646', {
			target: 'https://api.multiavatar.com',
			changeOrigin: true,
		})
	);
