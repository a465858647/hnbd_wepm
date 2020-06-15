define(['jquery', 'js/ztree/jquery.ztree.all.min.js', 'Cesium'], function ($, z, Cesium) {
	$('#treeDemo').on('click', function () {
		event.stopPropagation();
	});
	var zTreeObj;
	var setting = {
		check: {
			enable: true, //true / false 分别表示 显示 / 不显示 复选框或单选框
			autoCheckTrigger: true, //true / false 分别表示 触发 / 不触发 事件回调函数
			chkStyle: 'checkbox', //勾选框类型(checkbox 或 radio）
			chkboxType: { Y: 'p', N: 's' }, //勾选 checkbox 对于父子节点的关联关系
		},
		callback: {
			onCheck: zTreeOnCheck,
			onDblClick: zTreeOnDblClick,
		},
	};
	var zNodes = [
		{
			name: '影像',
			open: true,
			icon: '/img/layer/layers.png',
			children: [
				{ name: '谷歌', icon: '/img/layer/image.png' },
				{ name: '高德', icon: '/img/layer/image.png' },
			],
		},
		{ name: '地形', open: true, icon: '/img/layer/layers.png', children: [{ name: 'Cesium', icon: '/img/layer/dixing.png' }] },
		{ name: '标注', open: true, icon: '/img/layer/layers.png', children: [{ name: '二维地名', icon: '/img/layer/label.png' }] },
		{
			name: '项目',
			open: true,
			icon: '/img/layer/layers.png',
			children: [{ name: '机西高速项目', icon: '/img/layer/project.png', checked: false }],
		},
	];
	var jxgsPrimitives = new Cesium.PrimitiveCollection();
	var nameLabel;
	var terrainProvider;
	var googleIamge;
	var gaodeIamge;
	function zTreeOnCheck(event, treeId, treeNode) {
		if (treeNode.name == '机西高速项目' && treeNode.checked == true) {
			var tileset = viewer.scene.primitives.add(
				new Cesium.Cesium3DTileset({
					url: 'http://172.16.100.118:8888/jxgs_3dtiles/jx-K0-50/tileset.json', //数据路径
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
			jxgsPrimitives.add(tileset);
			var tileset3 = viewer.scene.primitives.add(
				new Cesium.Cesium3DTileset({
					url: 'http://172.16.100.118:8888/jxgs_3dtiles/jx-K50-100/tileset.json', //数据路径
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
			jxgsPrimitives.add(tileset3);
			var tileset4 = viewer.scene.primitives.add(
				new Cesium.Cesium3DTileset({
					url: 'http://172.16.100.118:8888/jxgs_3dtiles/jx-K100-150/tileset.json', //数据路径
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
			jxgsPrimitives.add(tileset4);
			var tileset2 = viewer.scene.primitives.add(
				new Cesium.Cesium3DTileset({
					url: 'http://172.16.100.118:8888/jxgs_qxsy02/tileset.json', //数据路径
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
			jxgsPrimitives.add(tileset2);
			require(['loaddth', 'Cesium'], function (dth) {
				dth.loadDth();
			});
		} else if (treeNode.name == '机西高速项目' && treeNode.checked == false) {
			jxgsPrimitives.removeAll();
			require(['loaddth', 'Cesium'], function (dth) {
				dth.removeDth();
			});
		}
		if (treeNode.name == '二维地名' && treeNode.checked == true) {
			nameLabel = new Cesium.ImageryLayer(
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
			viewer.imageryLayers.add(nameLabel);
		} else if (treeNode.name == '二维地名' && treeNode.checked == false) {
			viewer.imageryLayers.remove(nameLabel);
		}
		if (treeNode.name == 'Cesium' && treeNode.checked == true) {
			terrainProvider = Cesium.createWorldTerrain({
				// requestVertexNormals: true,
				// requestWaterMask: true,
			});
			viewer.terrainProvider = terrainProvider;
			// viewer.scene.globe.enableLighting = true;
			viewer.scene.globe.depthTestAgainstTerrain = true;
		} else if (treeNode.name == 'Cesium' && treeNode.checked == false) {
			terrainProvider = new Cesium.EllipsoidTerrainProvider({});
			viewer.scene.terrainProvider = terrainProvider;
		}
		if (treeNode.name == '谷歌' && treeNode.checked == true) {
			googleIamge = new Cesium.ImageryLayer(
				new Cesium.UrlTemplateImageryProvider({
					url: 'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',
					tilingScheme: new Cesium.WebMercatorTilingScheme(),
					minimumLevel: 1,
					maximumLevel: 20,
					credit: 'http://www.beidou-hn.com/',
				}),
				{ show: true }
			);
			viewer.imageryLayers.add(googleIamge);
		} else if (treeNode.name == '谷歌' && treeNode.checked == false) {
			viewer.imageryLayers.remove(googleIamge);
		}
		if (treeNode.name == '高德' && treeNode.checked == true) {
			gaodeIamge = new Cesium.ImageryLayer(
				new Cesium.UrlTemplateImageryProvider({
					url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
				}),
				{ show: true }
			);
			viewer.imageryLayers.add(gaodeIamge);
		} else if (treeNode.name == '高德' && treeNode.checked == false) {
			viewer.imageryLayers.remove(gaodeIamge);
		}
	}
	function zTreeOnDblClick(event, treeId, treeNode) {
		if (treeNode.name == '机西高速项目' && treeNode.checked == true) {
			viewer.scene.camera.flyTo({
				destination: new Cesium.Rectangle.fromDegrees(113.449663, 33.539802, 115.00249, 34.908563),
			});
		}
	}
	function initZtree() {
		zTreeObj = $.fn.zTree.init($('#treeDemo'), setting, zNodes);
		return zTreeObj;
	}
	return {
		initZtree: initZtree,
	};
});
