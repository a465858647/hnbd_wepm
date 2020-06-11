define(['cesium', 'jquery'], function (Cesium, $) {
	$('#jixigaosu').on('click', function () {
		viewer.scene.camera.flyTo({
			destination: new Cesium.Rectangle.fromDegrees(113.449663, 33.539802, 115.00249, 34.908563),
		});
		var tileset = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs_3dtiles/jx-K0-50/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 100, //最大加载瓦片个数
				skipLevelOfDetail: true,
				baseScreenSpaceError: 1024,
				skipScreenSpaceErrorFactor: 16,
				skipLevels: 1,
				immediatelyLoadDesiredLevelOfDetail: false,
				loadSiblings: false,
				cullWithChildrenBounds: true,
			}),
			1
		);
		var tileset3 = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs_3dtiles/jx-K50-100/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 100, //最大加载瓦片个数
				skipLevelOfDetail: true,
				baseScreenSpaceError: 1024,
				skipScreenSpaceErrorFactor: 16,
				skipLevels: 1,
				immediatelyLoadDesiredLevelOfDetail: false,
				loadSiblings: false,
				cullWithChildrenBounds: true,
			}),
			1
		);
		var tileset4 = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs_3dtiles/jx-K100-150/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 100, //最大加载瓦片个数
				skipLevelOfDetail: true,
				baseScreenSpaceError: 1024,
				skipScreenSpaceErrorFactor: 16,
				skipLevels: 1,
				immediatelyLoadDesiredLevelOfDetail: false,
				loadSiblings: false,
				cullWithChildrenBounds: true,
			}),
			1
		);

		var tileset2 = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs_qxsy02/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 100, //最大加载瓦片个数
				skipLevelOfDetail: true,
				baseScreenSpaceError: 1024,
				skipScreenSpaceErrorFactor: 16,
				skipLevels: 1,
				immediatelyLoadDesiredLevelOfDetail: false,
				loadSiblings: false,
				cullWithChildrenBounds: true,
			}),
			0
		);
		require(['loaddth']);
	});
});
