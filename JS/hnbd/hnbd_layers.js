define(['cesium', 'jquery'], function (Cesium, $) {
	/*            图层管理             */
	$('#imageLayer li').on('click', function () {
		if (/googleIamge/gi.test($(this).html())) {
			var googleIamgeNode = ztreeObj.getNodeByParam('name', '谷歌', null);
			var flag = googleIamgeNode.checked;
			ztreeObj.checkNode(googleIamgeNode, !flag, true, true);
		}
		if (/gaodeIamge/gi.test($(this).html())) {
			var gaodeIamgeNode = ztreeObj.getNodeByParam('name', '高德', null);
			var flag = gaodeIamgeNode.checked;
			ztreeObj.checkNode(gaodeIamgeNode, !flag, true, true);
		}
		if (/tdtImageLable/gi.test($(this).html())) {
			var labelnameNode = ztreeObj.getNodeByParam('name', '二维地名', null);
			var flag = labelnameNode.checked;
			ztreeObj.checkNode(labelnameNode, !flag, true, true);
		}
		if (/tiandituTerrain/gi.test($(this).html())) {
			var terrainNode = ztreeObj.getNodeByParam('name', 'Cesium', null);
			var flag = terrainNode.checked;
			ztreeObj.checkNode(terrainNode, !flag, true, true);
		}
	});
	$('#removeAllImage').on('click', function () {
		viewer.imageryLayers.removeAll();
	});
});
