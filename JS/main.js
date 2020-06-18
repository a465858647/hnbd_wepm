require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'jquery/jquery-3.5.1',
		bootstrap: 'bootstrap.min',
		Cesium: 'Cesium/Cesium',
		initmap: 'hnbd/hnbd_initmap',
		layers: 'hnbd/hnbd_layers',
		pm: 'hnbd/hnbd_pm',
		loaddth: 'hnbd/hnbd_pm_loaddth',
		layersTool: 'hnbd/hnbd_layersTool',
		CesiumNavigation: 'CesiumNavigation',
		toolbox: 'hnbd/hnbd_toolBox',
	},
});
var viewer;
var labelID = 1;
var token = '958ae533fdcf1d8f7677f7c9f711a4cc';
var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];
var ztreeObj;
require(['jquery'], function () {
	require(['bootstrap'], function () {
		$('.dropdown-menu').dropdown();
	});
	$(document).ready(function () {
		require(['layersTool'], function (layersTool) {
			ztreeObj = layersTool.initZtree();
			viewer.imageryLayers.removeAll();
			var googleIamgeNode = ztreeObj.getNodeByParam('name', '谷歌影像', null);
			var flag = googleIamgeNode.checked;
			ztreeObj.checkNode(googleIamgeNode, !flag, true, true);
			$('#tooBar').prop('display', 'block');
			document.getElementById('tooBar').style.visibility = 'visible';
		});
	});
});
require(['initmap']);
require(['layers']);
require(['pm']);
require(['toolbox']);

