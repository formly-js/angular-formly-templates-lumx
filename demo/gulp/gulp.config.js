module.exports = function () {
	var config = {
		alljs: ['app/*.js'],
		index: './index.html',
		app: ['app/app.js'],
		dist: 'dist',
		bundle: 'bundle.js'
	};

	return config;
};
