require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery/jquery-3.5.1',
		bootstrap: 'bootstrap.min',
		cesium: '../node_modules/Cesium/Cesium',
		initmap: 'hnbd/hnbd_initmap',
		layers: 'hnbd/hnbd_layers',
		// tianditu: 'http://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt',
	},
});
var viewer;
var token = '418a00e90328d5f937d647feaa4eedbf';
var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];
require(['jquery'], function () {
	require(['bootstrap'], function () {});
});
require(['initmap']);
// require(['http://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'], function () {
// 	require(['layers']);
// });
