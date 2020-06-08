require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery/jquery-3.5.1',
		bootstrap: 'bootstrap.min',
		cesium: '../node_modules/Cesium/Cesium',
		initmap: 'hnbd/hnbd_initmap',
		layers: 'hnbd/hnbd_layers',
	},
});
var viewer;
require(['jquery'], function () {
	require(['bootstrap'], function () {});
});
require(['initmap']);
require(['layers']);
