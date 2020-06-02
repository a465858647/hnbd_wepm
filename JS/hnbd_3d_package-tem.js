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

	var viewer = new Cesium.Viewer('cesiumdiv', {
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
	// $(function () {
	// 	$('.cesium-credit-logoContainer').remove();
	// 	$('.cesium-credit-expand-link').remove();
	// 	var hnbd_widget =
	// 		"<div class='cesium-credit-logoContainer' style='display: inline;'><div style='display: inline;'><a href='http://www.beidou-hn.com/' target='_blank'><img title='Cesium ion' src='img/logo/logo.png' height='35px'></a></div></div>";
	// 	$('.cesium-widget-credits').html(hnbd_widget);
	// });

	// // // Create an initial camera view创建相机初始位置和朝向
	// var initialPosition = new Cesium.Cartesian3.fromDegrees(114.14774, 34.67566, 13170);
	// var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(350.71, -45.19, 0);
	// var homeCameraView = {
	// 	destination: initialPosition,
	// 	orientation: {
	// 		heading: initialOrientation.heading,
	// 		pitch: initialOrientation.pitch,
	// 		roll: initialOrientation.roll,
	// 	},
	// };
	// // // Set the initial view设置初始视角
	// viewer.scene.camera.setView(homeCameraView);
	// // // Add some camera flight animation options添加飞行动画
	// homeCameraView.duration = 2.0;
	// homeCameraView.maximumHeight = 2000;
	// homeCameraView.pitchAdjustHeight = 2000;
	// homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
	// // Override the default home button覆盖原有home菜单事件
	// viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
	// 	e.cancel = true;
	// 	viewer.scene.camera.flyTo(homeCameraView);
	// });
	// /*
	//                   添加KML文件
	// */
	// var kmlOptions = {
	// 	camera: viewer.scene.camera,
	// 	canvas: viewer.scene.canvas,
	// 	clampToGround: true, //控制数据是否贴地
	// };
	// var geocachePromise = Cesium.KmlDataSource.load('/Source/xuandian.kml', kmlOptions);
	// geocachePromise.then(function (dataSource) {
	// 	viewer.dataSources.add(dataSource);
	// 	// Get the array of entities
	// 	var geocacheEntities = dataSource.entities.values;

	// 	for (var i = 0; i < geocacheEntities.length; i++) {
	// 		var entity = geocacheEntities[i];
	// 		if (Cesium.defined(entity.billboard)) {
	// 			console.log('+' + 1);
	// 			// Adjust the vertical origin so pins sit on terrain调整垂直方向的原点,保证图标里的针尖对着地表位置
	// 			entity.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
	// 			// Disable the labels to reduce clutter去掉文字显示
	// 			//entity.label = undefined;
	// 			// Add distance display condition设置可见距离
	// 			entity.billboard.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(10.0, 20000.0);
	// 			// Compute latitude and longitude in degrees
	// 			var cartographicPosition = Cesium.Cartographic.fromCartesian(entity.position.getValue(Cesium.JulianDate.now()));
	// 			var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
	// 			var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
	// 			// Modify description
	// 			var description =
	// 				'<table class="cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter"><tbody>' +
	// 				'<tr><th>' +
	// 				'经度' +
	// 				'</th><td>' +
	// 				longitude.toFixed(5) +
	// 				'</td></tr>' +
	// 				'<tr><th>' +
	// 				'纬度' +
	// 				'</th><td>' +
	// 				latitude.toFixed(5) +
	// 				'</td></tr>' +
	// 				'</tbody></table>';
	// 			entity.description = description;
	// 		}
	// 	}
	// });
	// /*
	//                   添加Geojson文件
	// */
	// /*
	// var geojsonOptions = {
	// 	clampToGround: true,
	// };
	// var neighborhoodsPromise = Cesium.GeoJsonDataSource.load('/Source/sheng.json', geojsonOptions);
	// var neighborhoods;
	// neighborhoodsPromise.then(function (dataSource) {
	// 	viewer.dataSources.add(dataSource);
	// 	neighborhoods = dataSource.entities;

	// 	// Get the array of entities
	// 	var neighborhoodEntities = dataSource.entities.values;
	// 	console.log(neighborhoodEntities.length);
	// 	for (var i = 0; i < neighborhoodEntities.length; i++) {
	// 		var entity = neighborhoodEntities[i];

	// 		if (Cesium.defined(entity.polygon)) {
	// 			entity.name = entity.properties.name;

	// 			entity.polygon.material = Cesium.Color.fromRandom({
	// 				red: 0.1,
	// 				maximumGreen: 0.5,
	// 				minimumBlue: 0.5,
	// 				alpha: 0.6,
	// 			});
	// 			// Tells the polygon to color the terrain. ClassificationType.CESIUM_3D_TILE will color the 3D tileset, and ClassificationType.BOTH will color both the 3d tiles and terrain (BOTH is the default)
	// 			entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

	// 			// Generate Polygon center
	// 			var polyPositions = entity.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
	// 			var polyCenter = Cesium.BoundingSphere.fromPoints(polyPositions).center;
	// 			polyCenter = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter);
	// 			entity.position = polyCenter;
	// 			// Generate labels
	// 			entity.label = {
	// 				text: entity.name,
	// 				showBackground: true,
	// 				scale: 0.6,
	// 				horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
	// 				verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
	// 				//distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10.0, 8000.0),
	// 				disableDepthTestDistance: 100.0,
	// 			};
	// 		}
	// 	}
	// }); */

	// /*
	//                    从CZML中载入无人机轨迹
	// */
	// // var dronePromise = Cesium.CzmlDsataSource.load('../Source/sampleFlight.czml');
	// // dronePromise.then(function (dataSource) {
	// // 	viewer.dataSources.add(dataSource);
	// // });
	// /*
	//                   添加实体
	// */
	// var billboard = viewer.entities.add({
	// 	name: 'entity',
	// 	description: '这是我的第一个测试',
	// 	position: Cesium.Cartesian3.fromDegrees(110, 40, 0),
	// 	billboard: { image: '../img/logo/logo.png', width: 32, height: 32 },
	// });

	// /*
	//         点击事件,log所有属性
	// */

	// /* 	var scene = viewer.scene;
	// viewer.screenSpaceEventHandler.setInputAction(function (movement) {
	// 	var feature = scene.pick(movement.position);
	// 	if (feature instanceof Cesium.Cesium3DTileFeature) {
	// 		var propertyNames = feature.getPropertyNames();
	// 		var length = propertyNames.length;
	// 		for (var i = 0; i < length; ++i) {
	// 			var propertyName = propertyNames[i];
	// 			console.log(propertyName + ':' + feature.getProperty(propertyName));
	// 		}
	// 	}
	// }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK); */
	// /*
	//         点击事件,弹出气泡
	// */
	// /* 	var info = this.document.getElementById('info');
	// function showInfo(entity) {
	// 	info.innerHTML = entity.name + '<br>' + entity.description;
	// 	info.style.display = 'block';
	// }
	// function hideInfo() {
	// 	info.style.display = 'none';
	// }
	// var pickPosition;
	// viewer.screenSpaceEventHandler.setInputAction(function (movement) {
	// 	var picked = scene.pick(movement.position);
	// 	if (picked) {
	// 		if (picked.id == billboard) {
	// 			pickPosition = scene.pickPosition(movement.position);
	// 			showInfo(billboard);
	// 		} else {
	// 			hideInfo();
	// 		}
	// 	}
	// }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);
	// var removeChanged = scene.postRender.addEventListener(function (percentage) {
	// 	//转换到屏幕坐标
	// 	if (pickPosition && info.style.display == 'block') {
	// 		var winpos = scene.cartesianToCanvasCoordinates(pickPosition); //获取屏幕坐标
	// 		if (winpos) {
	// 			info.style.left = (winpos.x - 100 / 2).toFixed(0) + 'px';
	// 			info.style.top = (winpos.y - 100).toFixed(0) + 'px';
	// 		}
	// 	}
	// }); */
	// //经纬度高度一起调整，仅限原数据中root.transform使用这种方法计算的
	// /*
	//         tileset.readyPromise.then(function (argument) {
	// 				var position = Cesium.Cartesian3.fromDegrees(114.12468, 34.75954, 200);
	// 				var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
	// 				tileset._root.transforms = mat;
	// 				console.log('333333' + tileset._root.transforms);
	//       });
	//       */
	// //
	// //
	// //
	// //
	/*            工具管理             */
	// $(function () {
	// 	$('#toolBox #measureDistance').on('click', function (handler) {
	// 		measureLineSpace(viewer, handler);
	// 	});
	// 	$('#toolBox #measureArea').on('click', function (handler) {
	// 		measureAreaSpace(viewer, handler);
	// 	});
	// });

	/*            效果管理             */
	// $(function () {
	// 	$('#specialEffect #lightAndWater').on('click', function () {
	// 		var terrainProvider = Cesium.createWorldTerrain({
	// 			requestVertexNormals: true,
	// 		});
	// 		viewer.terrainProvider = terrainProvider;
	// 		viewer.scene.globe.enableLighting = true;
	// 	});
	// 	$('#specialEffect #atmosphere').on('click', function () {
	// 		viewer.scene.skyAtmosphere.show = true;
	// 	});
	// });

	/*            项目管理             */
	// $(function () {
	// 	$('#projectChoose #jixigaosu').on('click', function () {
	// 		/*
	//                   加载3D  tile
	//     */
	// 		var tileset = new Cesium.Cesium3DTileset({ url: 'http://localhost:9000/model/cbdc52909f5211ea90c1c53df66fe9f8/tileset.json' });
	// 		viewer.scene.primitives.add(tileset);
	// 		//viewer.flyTo(tileset);
	// 		//地形深度检测开关
	// 		viewer.scene.globe.depthTestAgainstTerrain = true;
	// 		//旋转矩阵（高度调整）
	// 		tileset.readyPromise.then(function (argument) {
	// 			var heightOffset = -60;
	// 			var boundingSphere = tileset.boundingSphere;
	// 			var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
	// 			var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
	// 			var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
	// 			var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
	// 			tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
	// 		});
	// 		viewer.scene.globe.depthTestAgainstTerrain = false;
	// 		//设置3D  tile样式
	// 		var defaultStyle = new Cesium.Cesium3DTileStyle({
	// 			color: "color('white')",
	// 			show: true,
	// 		});
	// 		tileset.style = defaultStyle;
	// 		//设置视角
	// 		var initialPosition = new Cesium.Cartesian3.fromDegrees(114.14774, 34.67566, 13170);
	// 		var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(350.71, -45.19, 0);
	// 		var homeCameraView = {
	// 			destination: initialPosition,
	// 			orientation: {
	// 				heading: initialOrientation.heading,
	// 				pitch: initialOrientation.pitch,
	// 				roll: initialOrientation.roll,
	// 			},
	// 		};
	// 		// // Set the initial view设置初始视角
	// 		viewer.scene.camera.setView(homeCameraView);
	// 		// // Add some camera flight animation options添加飞行动画
	// 		homeCameraView.duration = 2.0;
	// 		homeCameraView.maximumHeight = 2000;
	// 		homeCameraView.pitchAdjustHeight = 2000;
	// 		homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
	// 	});
	// });
	// /*            图层管理             */
	// $(function () {
	// 	$('#imageLayer li').on('click', function () {
	// 		if (/Google Earth/gi.test($(this).html())) {
	// 			viewer.imageryLayers.removeAll();
	// 			var guge = new Cesium.ImageryLayer(
	// 				new Cesium.UrlTemplateImageryProvider({
	// 					url: 'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',
	// 					tilingScheme: new Cesium.WebMercatorTilingScheme(),
	// 					minimumLevel: 1,
	// 					maximumLevel: 20,
	// 					credit: 'http://www.bjxbsj.cn',
	// 				}),
	// 				{ show: true }
	// 			);
	// 			viewer.imageryLayers.add(guge);
	// 		}
	// 		if (/Esri ArcGIS/gi.test($(this).html())) {
	viewer.imageryLayers.removeAll();
				var guge = new Cesium.ImageryLayer(
					new Cesium.ArcGisMapServerImageryProvider({
						url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
					}),
					{ show: true }
				);
				viewer.imageryLayers.add(guge);
	// 		}

	// 		if (/WorldTerrain/gi.test($(this).html())) {
	// 			// // // Load Cesium World Terrain加载世界地形
	// 			viewer.terrainProvider = Cesium.createWorldTerrain({
	// 				requestWaterMask: true, // required for water effects水面效果
	// 				requestVertexNormals: true, // required for terrain lighting光照效果
	// 			});
	// 		}
	// 		if (/tiandituImage/gi.test($(this).html())) {
	// 			viewer.imageryLayers.removeAll();
	// 			//叠加影像服务
	// 			var imgMap = new Cesium.UrlTemplateImageryProvider({
	// 				url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
	// 				subdomains: subdomains,
	// 				tilingScheme: new Cesium.WebMercatorTilingScheme(),
	// 				maximumLevel: 18,
	// 			});
	// 			viewer.imageryLayers.addImageryProvider(imgMap);
	// 		}
	// 		if (/nationalBoundaries/gi.test($(this).html())) {
	// 			// 叠加国界服务
	// 			var iboMap = new Cesium.UrlTemplateImageryProvider({
	// 				url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
	// 				subdomains: subdomains,
	// 				tilingScheme: new Cesium.WebMercatorTilingScheme(),
	// 				maximumLevel: 10,
	// 			});
	// 			viewer.imageryLayers.addImageryProvider(iboMap);
	// 		}
	// 		if (/tiandituTerrain/gi.test($(this).html())) {
	// 			// viewer.imageryLayers.removeAll();
	// 			// 叠加地形服务
	// 			var terrainUrls = new Array();
	// 			for (var i = 0; i < subdomains.length; i++) {
	// 				var url = tdtUrl.replace('{s}', subdomains[i]) + 'DataServer?T=elv_c&tk=' + token;
	// 				terrainUrls.push(url);
	// 			}
	// 			var provider = new Cesium.GeoTerrainProvider({
	// 				urls: terrainUrls,
	// 			});
	// 			viewer.terrainProvider = provider;
	// 		}
	// 		if (/tiandituAnno/gi.test($(this).html())) {
	// 			// 叠加三维地名服务
	// 			var wtfs = new Cesium.GeoWTFS({
	// 				viewer,
	// 				subdomains: subdomains,
	// 				metadata: {
	// 					boundBox: {
	// 						minX: -180,
	// 						minY: -90,
	// 						maxX: 180,
	// 						maxY: 90,
	// 					},
	// 					minLevel: 1,
	// 					maxLevel: 20,
	// 				},
	// 				aotuCollide: true, //是否开启避让
	// 				collisionPadding: [5, 10, 8, 5], //开启避让时，标注碰撞增加内边距，上、右、下、左
	// 				serverFirstStyle: true, //服务端样式优先
	// 				labelGraphics: {
	// 					font: '28px sans-serif',
	// 					fontSize: 28,
	// 					fillColor: Cesium.Color.WHITE,
	// 					scale: 0.5,
	// 					outlineColor: Cesium.Color.BLACK,
	// 					outlineWidth: 5,
	// 					style: Cesium.LabelStyle.FILL_AND_OUTLINE,
	// 					showBackground: false,
	// 					backgroundColor: Cesium.Color.RED,
	// 					backgroundPadding: new Cesium.Cartesian2(10, 10),
	// 					horizontalOrigin: Cesium.HorizontalOrigin.MIDDLE,
	// 					verticalOrigin: Cesium.VerticalOrigin.TOP,
	// 					eyeOffset: Cesium.Cartesian3.ZERO,
	// 					pixelOffset: new Cesium.Cartesian2(0, 8),
	// 				},
	// 				billboardGraphics: {
	// 					horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
	// 					verticalOrigin: Cesium.VerticalOrigin.CENTER,
	// 					eyeOffset: Cesium.Cartesian3.ZERO,
	// 					pixelOffset: Cesium.Cartesian2.ZERO,
	// 					alignedAxis: Cesium.Cartesian3.ZERO,
	// 					color: Cesium.Color.WHITE,
	// 					rotation: 0,
	// 					scale: 1,
	// 					width: 18,
	// 					height: 18,
	// 				},
	// 			});

	// 			//三维地名服务，使用wtfs服务
	// 			wtfs.getTileUrl = function () {
	// 				return tdtUrl + 'mapservice/GetTiles?lxys={z},{x},{y}&tk=' + token;
	// 			};

	// 			wtfs.getIcoUrl = function () {
	// 				return tdtUrl + 'mapservice/GetIcon?id={id}&tk=' + token;
	// 			};

	// 			wtfs.initTDT([
	// 				{ x: 6, y: 1, level: 2, boundBox: { minX: 90, minY: 0, maxX: 135, maxY: 45 } },
	// 				{ x: 7, y: 1, level: 2, boundBox: { minX: 135, minY: 0, maxX: 180, maxY: 45 } },
	// 				{ x: 6, y: 0, level: 2, boundBox: { minX: 90, minY: 45, maxX: 135, maxY: 90 } },
	// 				{ x: 7, y: 0, level: 2, boundBox: { minX: 135, minY: 45, maxX: 180, maxY: 90 } },
	// 				{ x: 5, y: 1, level: 2, boundBox: { minX: 45, minY: 0, maxX: 90, maxY: 45 } },
	// 				{ x: 4, y: 1, level: 2, boundBox: { minX: 0, minY: 0, maxX: 45, maxY: 45 } },
	// 				{ x: 5, y: 0, level: 2, boundBox: { minX: 45, minY: 45, maxX: 90, maxY: 90 } },
	// 				{ x: 4, y: 0, level: 2, boundBox: { minX: 0, minY: 45, maxX: 45, maxY: 90 } },
	// 				{ x: 6, y: 2, level: 2, boundBox: { minX: 90, minY: -45, maxX: 135, maxY: 0 } },
	// 				{ x: 6, y: 3, level: 2, boundBox: { minX: 90, minY: -90, maxX: 135, maxY: -45 } },
	// 				{ x: 7, y: 2, level: 2, boundBox: { minX: 135, minY: -45, maxX: 180, maxY: 0 } },
	// 				{ x: 5, y: 2, level: 2, boundBox: { minX: 45, minY: -45, maxX: 90, maxY: 0 } },
	// 				{ x: 4, y: 2, level: 2, boundBox: { minX: 0, minY: -45, maxX: 45, maxY: 0 } },
	// 				{ x: 3, y: 1, level: 2, boundBox: { minX: -45, minY: 0, maxX: 0, maxY: 45 } },
	// 				{ x: 3, y: 0, level: 2, boundBox: { minX: -45, minY: 45, maxX: 0, maxY: 90 } },
	// 				{ x: 2, y: 0, level: 2, boundBox: { minX: -90, minY: 45, maxX: -45, maxY: 90 } },
	// 				{ x: 0, y: 1, level: 2, boundBox: { minX: -180, minY: 0, maxX: -135, maxY: 45 } },
	// 				{ x: 1, y: 0, level: 2, boundBox: { minX: -135, minY: 45, maxX: -90, maxY: 90 } },
	// 				{ x: 0, y: 0, level: 2, boundBox: { minX: -180, minY: 45, maxX: -135, maxY: 90 } },
	// 			]);
	// 		}
	// 	});
	// 	$('#localServerLoad').on('click', function () {
	// 		var url = $('#localServerUrl').prop('value');
	// 		// Example 2. USGS shaded relief tiles (RESTful)
	// 		var shadedRelief2 = new Cesium.WebMapTileServiceImageryProvider({
	// 			url: url,
	// 			layer: 'USGSShadedReliefOnly',
	// 			style: 'default',
	// 			format: 'image/jpeg',
	// 			tileMatrixSetID: 'default028mm',
	// 			maximumLevel: 19,
	// 			credit: new Cesium.Credit({ text: 'U. S. Geological Survey' }),
	// 		});
	// 		viewer.imageryLayers.addImageryProvider(shadedRelief2);
	// 	});
	// 	$('#removeAllImage').on('click', function () {
	// 		viewer.imageryLayers.removeAll();
	// 	});
	// });

	// /*
	//         高亮函数,鼠标交互
	// */
	// var previousPickedEntity;
	// var handler = viewer.screenSpaceEventHandler;
	// handler.setInputAction(function (movement) {
	// 	var pickedPrimitive = viewer.scene.pick(movement.endPosition);
	// 	var pickedEntity = Cesium.defined(pickedPrimitive) ? pickedPrimitive.id : undefined;
	// 	// 取消上一个高亮对象的高亮效果
	// 	if (Cesium.defined(previousPickedEntity)) {
	// 		previousPickedEntity.billboard.scale = 1.0;
	// 		previousPickedEntity.billboard.color = Cesium.Color.WHITE;
	// 	}
	// 	// 当前entity高亮
	// 	if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
	// 		pickedEntity.billboard.scale = 1.5;
	// 		pickedEntity.billboard.color = Cesium.Color.WHITE;
	// 		previousPickedEntity = pickedEntity;
	// 	}
	// }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
};
