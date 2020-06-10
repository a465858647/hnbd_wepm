require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery/jquery-3.5.1',
		bootstrap: 'bootstrap.min',
		cesium: '../node_modules/Cesium/Cesium',
		initmap: 'hnbd/hnbd_initmap',
		layers: 'hnbd/hnbd_layers',
		pm: 'hnbd/hnbd_pm',
		loaddth: 'hnbd/hnbd_pm_loaddth',
		// tianditu: '../node_modules/cesium-tdt/dist/cesiumTdt',
	},
});
var viewer;
var token = '958ae533fdcf1d8f7677f7c9f711a4cc';
var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];
require(['jquery'], function () {
	require(['bootstrap'], function () {});
});
require(['initmap']);
require(['layers']);
require(['pm']);
