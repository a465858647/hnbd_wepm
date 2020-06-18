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
	function measureLineSpace(viewer, handler, entityArr, handler2) {
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
			handler2.setInputAction(function (movement) {
				if (entityArr.length > 0) {
					for (var i = 0; i < entityArr.length; i++) {
						viewer.entities.remove(entityArr[i]);
					}
					handler2.destroy();
				}
			}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
		}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

		var PolyLinePrimitive = (function () {
			function _(positions) {
				this.options = {
					id: 'DistanceLabel' + labelID,
					name: '直线',
					polyline: {
						show: true,
						positions: [],
						material: new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.RED }),
						width: 2,
						clampToGround: true,
					},
				};
				this.positions = positions;
				this._init();
				labelID = labelID + 1;
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
	function measureAreaSpace(viewer, handler, handler2) {
		// 取消双击事件-追踪该位置
		viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		// 鼠标事件
		// handler = new Cesium.ScreenSpaceEventHandler(viewer.scene._imageryLayerCollection);
		// var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var positions = [];
		var tempPoints = [];
		var polygon = null;
		var cartesian = null;
		var floatingPoint; //浮动点
		var entityArr2 = [];
		handler.setInputAction(function (movement) {
			let ray = viewer.camera.getPickRay(movement.endPosition);
			cartesian = viewer.scene.globe.pick(ray, viewer.scene);
			if (positions.length >= 2) {
				if (!Cesium.defined(polygon)) {
					polygon = new PolygonPrimitive(positions);
				} else {
					positions.pop();
					positions.push(cartesian);
				}
			}
		}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

		handler.setInputAction(function (movement) {
			let ray = viewer.camera.getPickRay(movement.position);
			cartesian = viewer.scene.globe.pick(ray, viewer.scene);

			if (positions.length == 0) {
				positions.push(cartesian.clone());
			}
			// positions.pop();
			positions.push(cartesian);
			//在三维场景中添加点
			var cartographic = Cesium.Cartographic.fromCartesian(positions[positions.length - 1]);
			var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
			var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
			var heightString = cartographic.height;
			tempPoints.push({ lon: longitudeString, lat: latitudeString, hei: heightString });
			floatingPoint = viewer.entities.add({
				id: 'AreaLabel' + labelID,
				name: '多边形面积',
				position: positions[positions.length - 1],
				point: {
					pixelSize: 5,
					color: Cesium.Color.RED,
					outlineColor: Cesium.Color.WHITE,
					outlineWidth: 2,
					heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
				},
			});
			entityArr2.push(viewer.entities.getById('AreaLabel' + labelID));
			labelID = labelID + 1;
		}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

		handler.setInputAction(function (movement) {
			handler.destroy();
			positions.pop();
			var textArea = getArea(tempPoints) + '平方米';
			viewer.entities.add({
				id: 'AreaLabel' + labelID,
				name: '多边形面积',
				position: positions[positions.length - 1],
				point: {
					pixelSize: 5,
					color: Cesium.Color.RED,
					outlineColor: Cesium.Color.WHITE,
					outlineWidth: 2,
					heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
				},
				label: {
					text: textArea,
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
			entityArr2.push(viewer.entities.getById('AreaLabel' + labelID));
			labelID = labelID + 1;
		}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		handler2.setInputAction(function (movement) {
			if (entityArr2.length > 0) {
				for (var i = 0; i < entityArr2.length; i++) {
					viewer.entities.remove(entityArr2[i]);
				}
				handler2.destroy();
			}
		}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
		var radiansPerDegree = Math.PI / 180.0; //角度转化为弧度(rad)
		var degreesPerRadian = 180.0 / Math.PI; //弧度转化为角度

		//计算多边形面积
		function getArea(points) {
			var res = 0;
			for (var i = 0; i < points.length - 2; i++) {
				var j = (i + 1) % points.length;
				var k = (i + 2) % points.length;
				var totalAngle = Angle(points[i], points[j], points[k]);

				var dis_temp1 = distance(positions[i], positions[j]);
				var dis_temp2 = distance(positions[j], positions[k]);
				res += dis_temp1 * dis_temp2 * Math.abs(Math.sin(totalAngle));
				console.log(res);
			}
			return res.toFixed(2);
		}

		/*角度*/
		function Angle(p1, p2, p3) {
			var bearing21 = Bearing(p2, p1);
			var bearing23 = Bearing(p2, p3);
			var angle = bearing21 - bearing23;
			if (angle < 0) {
				angle += 360;
			}
			return angle;
		}
		/*方向*/
		function Bearing(from, to) {
			var lat1 = from.lat * radiansPerDegree;
			var lon1 = from.lon * radiansPerDegree;
			var lat2 = to.lat * radiansPerDegree;
			var lon2 = to.lon * radiansPerDegree;
			var angle = -Math.atan2(
				Math.sin(lon1 - lon2) * Math.cos(lat2),
				Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)
			);
			if (angle < 0) {
				angle += Math.PI * 2.0;
			}
			angle = angle * degreesPerRadian; //角度
			return angle;
		}

		var PolygonPrimitive = (function () {
			function _(positions) {
				this.options = {
					id: 'AreaLabel' + labelID,
					name: '多边形',
					polygon: {
						hierarchy: [],
						// perPositionHeight : true,
						material: Cesium.Color.GREEN.withAlpha(0.5),
						// heightReference:20000
					},
				};
				this.hierarchy = { positions };
				this._init();
				entityArr2.push(viewer.entities.getById('AreaLabel' + labelID));
				labelID = labelID + 1;
			}

			_.prototype._init = function () {
				var _self = this;
				var _update = function () {
					return _self.hierarchy;
				};
				//实时更新polygon.hierarchy
				this.options.polygon.hierarchy = new Cesium.CallbackProperty(_update, false);
				viewer.entities.add(this.options);
			};

			return _;
		})();

		function distance(point1, point2) {
			var point1cartographic = Cesium.Cartographic.fromCartesian(point1);
			var point2cartographic = Cesium.Cartographic.fromCartesian(point2);
			/**根据经纬度计算出距离**/
			var geodesic = new Cesium.EllipsoidGeodesic();
			geodesic.setEndPoints(point1cartographic, point2cartographic);
			var s = geodesic.surfaceDistance;
			//返回两点之间的距离
			s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2));
			return s;
		}
	}
	$('#surveyDistance').on('click', function (event) {
		//测量空间直线距离
		/******************************************* */
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var handler2 = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var entityArr = [];
		measureLineSpace(viewer, handler, entityArr, handler2);
	});
	$('#measureAreaSpace').on('click', function (event) {
		// handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.imageryLayerCollection);
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		var handler2 = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		measureAreaSpace(viewer, handler, handler2);
		//****************************测量空间面积************************************************//
	});
});
