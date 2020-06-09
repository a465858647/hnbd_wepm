define(['cesium', 'jquery'], function (Cesium, $) {
	/*            图层管理             */
	$('#imageLayer li').on('click', function () {
		if (/googleIamge/gi.test($(this).html())) {
			viewer.imageryLayers.removeAll();
			var guge = new Cesium.ImageryLayer(
				new Cesium.UrlTemplateImageryProvider({
					url: 'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',
					tilingScheme: new Cesium.WebMercatorTilingScheme(),
					minimumLevel: 1,
					maximumLevel: 20,
					credit: 'http://www.beidou-hn.com/',
				}),
				{ show: true }
			);
			viewer.imageryLayers.add(guge);
		}
		if (/gaodeIamge/gi.test($(this).html())) {
			viewer.imageryLayers.removeAll();
			var guge = new Cesium.ImageryLayer(
				new Cesium.UrlTemplateImageryProvider({
					url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
				}),
				{ show: true }
			);
			viewer.imageryLayers.add(guge);
		}
		if (/tdtImageLable/gi.test($(this).html())) {
			var guge = new Cesium.ImageryLayer(
				new Cesium.UrlTemplateImageryProvider({
					url: '//t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + token,
					layer: 'cia',
					style: 'default',
					tileMatrixSetID: 'w',
					format: 'tiles',
					maximumLevel: 18,
				}),
				{ show: true }
			);
			viewer.imageryLayers.add(guge);
		}
		if (/tiandituTerrain/gi.test($(this).html())) {
			var terrainProvider = Cesium.createWorldTerrain({
				requestVertexNormals: true,
			});
			viewer.terrainProvider = terrainProvider;
			viewer.scene.globe.enableLighting = true;
		}
	});
	$('#removeAllImage').on('click', function () {
		viewer.imageryLayers.removeAll();
	});
});
