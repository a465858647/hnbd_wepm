define(['Cesium', 'jquery'], function (Cesium, $) {
	$('#surveyCoordinate').on('click', function (event) {
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		surveyCoordinate(event, handler);
		deleteCoordinateLabel(event, handler);
	});
	function surveyCoordinate(event, handler) {
		if (Cesium.defined(viewer.terrainProvider.availability)) {
			//todo：在显示地形情况下点击创建点

			handler.setInputAction(function (event) {
				if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
					console.log('当前浏览器不支持地形图');
					return;
				}
				var earthPosition = viewer.scene.pickPosition(event.position); //获取到地形图上面的坐标
				if (Cesium.defined(earthPosition)) {
					//将笛卡尔三维坐标转为地图坐标（弧度）
					var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(earthPosition);
					//将地图坐标（弧度）转为十进制的度数
					var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
					var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
					var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
					//添加标注点
					viewer.entities.add({
						id: 'CoordinateLabel' + labelID,
						name: 'CoordinateLabel',
						// position: cartesian,
						position: Cesium.Cartesian3.fromDegrees(log_String, lat_String, alti_String),
						point: {
							pixelSize: 2,
							color: Cesium.Color.BLACK,
							outlineColor: Cesium.Color.WHITE,
							outlineWidth: 1,
							disableDepthTestDistance: Number.POSITIVE_INFINITY,
							heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
						},
						//字体标签样式
						label: {
							text: '经度：' + log_String + '\n' + '纬度：' + lat_String,
							font: '12px Monospace  ',
							fillColor: Cesium.Color.BLACK,
							style: Cesium.LabelStyle.FILL_AND_OUTLINE,
							showBackground: true,
							backgroundColor: Cesium.Color.ALICEBLUE,
							horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
							verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
							disableDepthTestDistance: Number.POSITIVE_INFINITY,
							heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
						},
					});
					labelID = labelID + 1;
				}
			}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
		}
		//todo：在椭球下点击创建点
		if (typeof viewer.terrainProvider.availability == 'undefined') {
			handler.setInputAction(function (event) {
				var earthPosition = viewer.camera.pickEllipsoid(event.position, viewer.scene.globe.ellipsoid); //返回在椭球上面的点的坐标
				if (Cesium.defined(earthPosition)) {
					//将笛卡尔三维坐标转为地图坐标（弧度）
					var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(earthPosition);
					//将地图坐标（弧度）转为十进制的度数
					var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
					var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
					var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
					//添加标注点
					viewer.entities.add({
						id: 'CoordinateLabel' + labelID,
						name: 'CoordinateLabel',
						// position: cartesian,
						position: Cesium.Cartesian3.fromDegrees(log_String, lat_String),
						point: { pixelSize: 2, color: Cesium.Color.BLACK, outlineColor: Cesium.Color.WHITE, outlineWidth: 1 },
						//字体标签样式
						label: {
							text: '经度：' + log_String + '\n' + '纬度：' + lat_String,
							font: '12px Monospace  ',
							fillColor: Cesium.Color.BLACK,
							style: Cesium.LabelStyle.FILL_AND_OUTLINE,
							showBackground: true,
							backgroundColor: Cesium.Color.ALICEBLUE,
							horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
							verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
						},
					});
					labelID = labelID + 1;
				}
			}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
		}

		//todo：拾取模型表面的位置
		// handler.setInputAction(function (evt) {
		// 	var scene = viewer.scene;
		// 	var pickedObject = scene.pick(evt.position); //判断是否拾取到模型
		// 	if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
		// 		var cartesian = viewer.scene.pickPosition(evt.position);
		// 		if (Cesium.defined(cartesian)) {
		// 			var cartographic = Cesium.Cartographic.fromCartesian(cartesian); //根据笛卡尔坐标获取到弧度
		// 			var lng = Cesium.Math.toDegrees(cartographic.longitude); //根据弧度获取到经度
		// 			var lat = Cesium.Math.toDegrees(cartographic.latitude); //根据弧度获取到纬度
		// 			var height = cartographic.height; //模型高度
		// 			annotate(cartesian, lng, lat, height);
		// 		}
		// 	}
		// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	}
	function deleteCoordinateLabel(event, handler) {
		handler.setInputAction(function (event) {
			handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
			var pick = viewer.scene.pick(event.position);
			if (Cesium.defined(pick) && RegExp(/CoordinateLabel/).test(pick.id.id)) {
				var selectEntity = viewer.entities.getById(pick.id.id);
				viewer.entities.remove(selectEntity);
			}
		}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
	}
	$('#surveyDistance').on('click', function (event) {
		//测量空间直线距离
		/******************************************* */
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var handler2 = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var entityArr = [];
		function measureLineSpace(viewer, handler) {
			// 取消双击事件-追踪该位置
			viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
			var positions = [];
			var poly = null;
			var distance = 0;
			var cartesian = null;
			var floatingPoint;
			handler.setInputAction(function (movement) {
				let ray = viewer.camera.getPickRay(movement.endPosition);
				cartesian = viewer.scene.globe.pick(ray, viewer.scene);
				if (positions.length >= 2) {
					if (!Cesium.defined(poly)) {
						poly = new PolyLinePrimitive(positions);
					} else {
						positions.pop();
						positions.push(cartesian);
					}
					distance = getSpaceDistance(positions);
				}
			}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

			handler.setInputAction(function (movement) {
				let ray = viewer.camera.getPickRay(movement.position);
				cartesian = viewer.scene.globe.pick(ray, viewer.scene);
				if (positions.length == 0) {
					positions.push(cartesian.clone());
				}
				positions.push(cartesian);
				var textDisance = distance + '米';
				floatingPoint = viewer.entities.add({
					id: 'DistanceLabel' + labelID,
					name: '空间直线距离',
					position: positions[positions.length - 1],
					point: {
						pixelSize: 2,
						color: Cesium.Color.RED,
						outlineColor: Cesium.Color.WHITE,
						outlineWidth: 1,
					},
					label: {
						text: textDisance,
						font: '12px Monospace ',
						fillColor: Cesium.Color.BLACK,
						style: Cesium.LabelStyle.FILL_AND_OUTLINE,
						outlineWidth: 2,
						verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
						// pixelOffset: new Cesium.Cartesian2(20, -20),
						showBackground: true,
						backgroundColor: Cesium.Color.ALICEBLUE,
						horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
						verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
					},
				});
				entityArr.push(viewer.entities.getById('DistanceLabel' + labelID));
				labelID = labelID + 1;
			}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

			handler.setInputAction(function (movement) {
				handler.destroy(); //关闭事件句柄
				positions.pop(); //最后一个点无效
				console.log(entityArr);
				// handler2.setInputAction(function (movement) {
				// 	if (entityArr.length > 0) {
				// 		for (var i = 0; i < entityArr.length; i++) {
				// 			viewer.entities.remove(entityArr[i]);
				// 		}
				// 		handler2.destroy();
				// 	}
				// }, Cesium.ScreenSpaceEventType.RIGHT_DOUBLE_CLICK);
			}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

			var PolyLinePrimitive = (function () {
				function _(positions) {
					this.options = {
						id: 'DistanceLabel',
						name: '直线',
						polyline: {
							show: true,
							positions: [],
							material: new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.RED }),
							width: 1,
							clampToGround: true,
						},
					};
					this.positions = positions;
					this._init();
				}

				_.prototype._init = function () {
					var _self = this;
					var _update = function () {
						return _self.positions;
					};
					//实时更新polyline.positions
					this.options.polyline.positions = new Cesium.CallbackProperty(_update, false);
					viewer.entities.add(this.options);

					entityArr.push(this.options);
				};

				return _;
			})();

			//空间两点距离计算函数
			function getSpaceDistance(positions) {
				var distance = 0;
				for (var i = 0; i < positions.length - 1; i++) {
					var point1cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
					var point2cartographic = Cesium.Cartographic.fromCartesian(positions[i + 1]);
					/**根据经纬度计算出距离**/
					var geodesic = new Cesium.EllipsoidGeodesic();
					geodesic.setEndPoints(point1cartographic, point2cartographic);
					var s = geodesic.surfaceDistance;
					//console.log(Math.sqrt(Math.pow(distance, 2) + Math.pow(endheight, 2)));
					//返回两点之间的距离
					s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2));
					distance = distance + s;
				}
				return distance.toFixed(2);
			}
		}
		measureLineSpace(viewer, handler);
	});
});
