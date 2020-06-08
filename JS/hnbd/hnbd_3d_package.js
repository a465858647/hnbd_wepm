var viewer;
window.onresize = function () {
	/*窗体初始化*/
	var ocontainerFluid = document.getElementById('container-fluid');
	var oNavbar = document.getElementById('nav');
	var oMap = document.getElementById('cesiumdiv');
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight,
	};
	oMap.style.height = size.height - oNavbar.offsetHeight + 20 + 'px';
};
window.onload = function () {
	Cesium.Ion.defaultAccessToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZDFlN2QyNi05NTMyLTRkZjMtYjM3Ni1iZTQzY2M1NGVhNjAiLCJpZCI6Mjg2NjUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTEzMjY3MDJ9.h-nWrkKCjr308Y1iOz28f26eogyP6ZPfgfo1pny_vl0';
	/*窗体初始化*/
	var ocontainerFluid = document.getElementById('container-fluid');
	var oNavbar = document.getElementById('nav');
	var oMap = document.getElementById('cesiumdiv');
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight,
	};
	oMap.style.height = size.height - oNavbar.offsetHeight + 20 + 'px';
	/*天地图初始化*/
	var token = '958ae533fdcf1d8f7677f7c9f711a4cc';
	// 服务域名
	var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
	// 服务负载子域
	var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];
	/*cesium 初始化*/
	//设置默认视点,需要在设置viewer之先设置
	var china = Cesium.Rectangle.fromDegrees(100, 10, 120, 70);
	Cesium.Camera.DEFAULT_VIEW_RECTANGLE = china;

	viewer = new Cesium.Viewer('cesiumdiv', {
		animation: false, //动画控件
		baseLayerPicker: false, //图层选择
		timeline: false, //时间线
		geocoder: false, //地址搜索控件
		navigationHelpButton: false, //帮助图标
		sceneModePicker: false,
		// vrButton: true,
		//infoBox: false,//设置为false信息窗口将不再弹出
	});
	//导航栏
	viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

	// 显示FPS
	viewer.scene.debugShowFramesPerSecond = true;
	//控制视角不转到地下
	$(function () {
		$('.cesium-credit-logoContainer').remove();
		$('.cesium-credit-expand-link').remove();
		var hnbd_widget =
			"<div class='cesium-credit-logoContainer' style='display: inline;'><div style='display: inline;'><a href='http://www.beidou-hn.com/' target='_blank'><img title='Cesium ion' src='img/logo/logo.png' height='35px'></a></div></div>";
		$('.cesium-widget-credits').html(hnbd_widget);
	});
	/*初始化谷歌地图*/
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
	/*            工具管理             */
	$(function () {
		$('#toolBox #measureDistance').on('click', function (handler) {
			measureLineSpace(viewer, handler);
		});
		$('#toolBox #measureArea').on('click', function (handler) {
			measureAreaSpace(viewer, handler);
		});
	});

	/*            效果管理             */
	$(function () {
		$('#specialEffect #lightAndWater').on('click', function () {
			var terrainProvider = Cesium.createWorldTerrain({
				requestVertexNormals: true,
			});
			viewer.terrainProvider = terrainProvider;
			viewer.scene.globe.enableLighting = true;
		});
		$('#specialEffect #atmosphere').on('click', function () {
			viewer.scene.skyAtmosphere.show = true;
		});
	});

	/*            项目管理             */
	$(function () {
		$('#projectChoose #jixigaosu').on('click', function () {
			/*
	                  加载3D  tile
	    */
			var tileset = new Cesium.Cesium3DTileset({ url: 'http://localhost:9000/model/cbdc52909f5211ea90c1c53df66fe9f8/tileset.json' });
			viewer.scene.primitives.add(tileset);
			//viewer.flyTo(tileset);
			//地形深度检测开关
			viewer.scene.globe.depthTestAgainstTerrain = true;
			//旋转矩阵（高度调整）
			tileset.readyPromise.then(function (argument) {
				var heightOffset = -60;
				var boundingSphere = tileset.boundingSphere;
				var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
				var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
				var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
				var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
				tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
			});
			viewer.scene.globe.depthTestAgainstTerrain = false;
			//设置3D  tile样式
			var defaultStyle = new Cesium.Cesium3DTileStyle({
				color: "color('white')",
				show: true,
			});
			tileset.style = defaultStyle;
			//设置视角
			var initialPosition = new Cesium.Cartesian3.fromDegrees(114.14774, 34.67566, 13170);
			var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(350.71, -45.19, 0);
			var homeCameraView = {
				destination: initialPosition,
				orientation: {
					heading: initialOrientation.heading,
					pitch: initialOrientation.pitch,
					roll: initialOrientation.roll,
				},
			};
			// // Set the initial view设置初始视角
			viewer.scene.camera.setView(homeCameraView);
			// // Add some camera flight animation options添加飞行动画
			homeCameraView.duration = 2.0;
			homeCameraView.maximumHeight = 2000;
			homeCameraView.pitchAdjustHeight = 2000;
			homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
		});
	});
	/*            图层管理             */
	$(function () {
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
			if (/baiduIamge/gi.test($(this).html())) {
				// viewer.imageryLayers.removeAll();
				alert('待完善');
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
			if (/tdtStreetLable/gi.test($(this).html())) {
			}
			if (/WorldTerrain/gi.test($(this).html())) {
				// // // Load Cesium World Terrain加载世界地形
				viewer.terrainProvider = Cesium.createWorldTerrain({
					requestWaterMask: true, // required for water effects水面效果
					requestVertexNormals: true, // required for terrain lighting光照效果
				});
			}
			if (/tiandituImage/gi.test($(this).html())) {
				viewer.imageryLayers.removeAll();
				//叠加影像服务
				var imgMap = new Cesium.UrlTemplateImageryProvider({
					url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
					subdomains: subdomains,
					tilingScheme: new Cesium.WebMercatorTilingScheme(),
					maximumLevel: 18,
				});
				viewer.imageryLayers.addImageryProvider(imgMap);
			}
			if (/nationalBoundaries/gi.test($(this).html())) {
				// 叠加国界服务
				var iboMap = new Cesium.UrlTemplateImageryProvider({
					url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
					subdomains: subdomains,
					tilingScheme: new Cesium.WebMercatorTilingScheme(),
					maximumLevel: 10,
				});
				viewer.imageryLayers.addImageryProvider(iboMap);
			}
			if (/tiandituTerrain/gi.test($(this).html())) {
				// viewer.imageryLayers.removeAll();
				// 叠加地形服务
				var terrainUrls = new Array();
				for (var i = 0; i < subdomains.length; i++) {
					var url = tdtUrl.replace('{s}', subdomains[i]) + 'DataServer?T=elv_c&tk=' + token;
					terrainUrls.push(url);
				}
				var provider = new Cesium.GeoTerrainProvider({
					urls: terrainUrls,
				});
				viewer.terrainProvider = provider;
			}
			if (/tiandituAnno/gi.test($(this).html())) {
				// 叠加三维地名服务
				var wtfs = new Cesium.GeoWTFS({
					viewer,
					subdomains: subdomains,
					metadata: {
						boundBox: {
							minX: -180,
							minY: -90,
							maxX: 180,
							maxY: 90,
						},
						minLevel: 1,
						maxLevel: 20,
					},
					aotuCollide: true, //是否开启避让
					collisionPadding: [5, 10, 8, 5], //开启避让时，标注碰撞增加内边距，上、右、下、左
					serverFirstStyle: true, //服务端样式优先
					labelGraphics: {
						font: '28px sans-serif',
						fontSize: 28,
						fillColor: Cesium.Color.WHITE,
						scale: 0.5,
						outlineColor: Cesium.Color.BLACK,
						outlineWidth: 5,
						style: Cesium.LabelStyle.FILL_AND_OUTLINE,
						showBackground: false,
						backgroundColor: Cesium.Color.RED,
						backgroundPadding: new Cesium.Cartesian2(10, 10),
						horizontalOrigin: Cesium.HorizontalOrigin.MIDDLE,
						verticalOrigin: Cesium.VerticalOrigin.TOP,
						eyeOffset: Cesium.Cartesian3.ZERO,
						pixelOffset: new Cesium.Cartesian2(0, 8),
					},
					billboardGraphics: {
						horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
						verticalOrigin: Cesium.VerticalOrigin.CENTER,
						eyeOffset: Cesium.Cartesian3.ZERO,
						pixelOffset: Cesium.Cartesian2.ZERO,
						alignedAxis: Cesium.Cartesian3.ZERO,
						color: Cesium.Color.WHITE,
						rotation: 0,
						scale: 1,
						width: 18,
						height: 18,
					},
				});

				//三维地名服务，使用wtfs服务
				wtfs.getTileUrl = function () {
					return tdtUrl + 'mapservice/GetTiles?lxys={z},{x},{y}&tk=' + token;
				};

				wtfs.getIcoUrl = function () {
					return tdtUrl + 'mapservice/GetIcon?id={id}&tk=' + token;
				};

				wtfs.initTDT([
					{ x: 6, y: 1, level: 2, boundBox: { minX: 90, minY: 0, maxX: 135, maxY: 45 } },
					{ x: 7, y: 1, level: 2, boundBox: { minX: 135, minY: 0, maxX: 180, maxY: 45 } },
					{ x: 6, y: 0, level: 2, boundBox: { minX: 90, minY: 45, maxX: 135, maxY: 90 } },
					{ x: 7, y: 0, level: 2, boundBox: { minX: 135, minY: 45, maxX: 180, maxY: 90 } },
					{ x: 5, y: 1, level: 2, boundBox: { minX: 45, minY: 0, maxX: 90, maxY: 45 } },
					{ x: 4, y: 1, level: 2, boundBox: { minX: 0, minY: 0, maxX: 45, maxY: 45 } },
					{ x: 5, y: 0, level: 2, boundBox: { minX: 45, minY: 45, maxX: 90, maxY: 90 } },
					{ x: 4, y: 0, level: 2, boundBox: { minX: 0, minY: 45, maxX: 45, maxY: 90 } },
					{ x: 6, y: 2, level: 2, boundBox: { minX: 90, minY: -45, maxX: 135, maxY: 0 } },
					{ x: 6, y: 3, level: 2, boundBox: { minX: 90, minY: -90, maxX: 135, maxY: -45 } },
					{ x: 7, y: 2, level: 2, boundBox: { minX: 135, minY: -45, maxX: 180, maxY: 0 } },
					{ x: 5, y: 2, level: 2, boundBox: { minX: 45, minY: -45, maxX: 90, maxY: 0 } },
					{ x: 4, y: 2, level: 2, boundBox: { minX: 0, minY: -45, maxX: 45, maxY: 0 } },
					{ x: 3, y: 1, level: 2, boundBox: { minX: -45, minY: 0, maxX: 0, maxY: 45 } },
					{ x: 3, y: 0, level: 2, boundBox: { minX: -45, minY: 45, maxX: 0, maxY: 90 } },
					{ x: 2, y: 0, level: 2, boundBox: { minX: -90, minY: 45, maxX: -45, maxY: 90 } },
					{ x: 0, y: 1, level: 2, boundBox: { minX: -180, minY: 0, maxX: -135, maxY: 45 } },
					{ x: 1, y: 0, level: 2, boundBox: { minX: -135, minY: 45, maxX: -90, maxY: 90 } },
					{ x: 0, y: 0, level: 2, boundBox: { minX: -180, minY: 45, maxX: -135, maxY: 90 } },
				]);
			}
		});
		$('#AddWMTS').on('click', function () {
			var url = $('#localServerUrl').prop('value');
			// Example 2. USGS shaded relief tiles (RESTful)
			var shadedRelief2 = new Cesium.WebMapTileServiceImageryProvider({
				url: url,
				layer: 'USGSShadedReliefOnly',
				style: 'default',
				format: 'image/jpeg',
				tileMatrixSetID: 'default028mm',
				maximumLevel: 19,
				credit: new Cesium.Credit({ text: 'U. S. Geological Survey' }),
			});
			viewer.imageryLayers.addImageryProvider(shadedRelief2);
		});
		$('#removeAllImage').on('click', function () {
			viewer.imageryLayers.removeAll();
		});
		//添加3Dtiles
		$('#Add3DTiles').on('click', function () {
			var tileset = new Cesium.Cesium3DTileset({
				url: 'http://172.16.100.126:8888/jxgs.clt/tileset.json',
				shadows: Cesium.ShadowMode.DISABLED, //去除阴影
			});
			//
			viewer.scene.primitives.add(tileset);
			viewer.zoomTo(tileset);
		});
	});
};
