// import './lib';
require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery/jquery-3.5.1',
		bootstrap: 'bootstrap.min',
		cesium: '../node_modules/Cesium/Cesium',
		initmap: 'hnbd/hnbd_initmap',
		layers: 'hnbd/hnbd_layers',
		tianditu: '../node_modules/cesium-tdt/dist/cesiumTdt',
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
require(['cesium'], function () {
	// alert('cesium加载成功')
	require(['tianditu'], function () {
		alert('ok');
	} /* , function (err) {
		alert(err);
	} */);
});
