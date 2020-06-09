define(['cesium', 'jquery'], function (Cesium, $) {
	$('#jixigaosu').on('click', function () {
		var tileset = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs.clt/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
			}),
			1
		);
		// var redPolygon = viewer.entities.add({
		// 	name: 'Red polygon on surface',
		// 	polygon: {
		// 		hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
		// 			114.122106,
		// 			34.784893,
		// 			1000,
		// 			114.130231,
		// 			34.784783,
		// 			1000,
		// 			114.12927,
		// 			34.776907,
		// 			1000,
		// 			114.121545,
		// 			34.776286,
		// 			1000,
		// 		]),
		// 		material: Cesium.Color.RED,
		// 	},
		// });
		// var clippingPlanes = new Cesium.ClippingPlaneCollection({
		// 	// planes: [new Cesium.ClippingPlane(new Cesium.Cartesian3(0.0, 1.0, 0.0), 5.0)],
		// 	planes: [
		// 		new Cesium.ClippingPlane(new Cesium.Cartesian3.fromDegrees(114.122106, 34.784893, 60), -30),
		// 		new Cesium.ClippingPlane(new Cesium.Cartesian3.fromDegrees(114.130231, 34.784783, 60), -30),
		// 		new Cesium.ClippingPlane(new Cesium.Cartesian3.fromDegrees(114.12927, 34.776907, 60), -30),
		// 		new Cesium.ClippingPlane(new Cesium.Cartesian3.fromDegrees(114.121545, 34.776286, 60), -30),
		// 	],
		// });
		var tileset2 = viewer.scene.primitives.add(
			new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs_qxsy/tileset.json', //数据路径
				maximumScreenSpaceError: 2, //最大的屏幕空间误差
				maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
				// clippingPlanes: clippingPlanes,
			}),
			0
		);
		console.log(tileset);
		viewer.zoomTo(tileset, { heading: 0, pitch: -0.5, range: 1000 });
	});
});
