define(['Cesium', 'jquery'], function (Cesium, $) {
	$('#surveyCoordinate').on('click', function (event) {
		// surveyCoordinate(event, id);
		surveyCoordinate(event);
		deleteCoordinateLabel(event);
	});
	function surveyCoordinate(event) {
		// var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
		// //todo：在椭球下点击创建点
		// handler.setInputAction(function (event) {
		// 	var cartesian = viewer.camera.pickEllipsoid(event.position, viewer.scene.globe.ellipsoid); //返回在椭球上面的点的坐标
		// 	if (Cesium.defined(cartesian)) {
		// 		console.log(cartesian);
		// 		//将笛卡尔三维坐标转为地图坐标（弧度）
		// 		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		// 		console.log(cartographic);
		// 		//将地图坐标（弧度）转为十进制的度数
		// 		var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
		// 		var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
		// 		var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
		// 		console.log(log_String);
		// 		console.log(lat_String);
		// 		console.log(alti_String);
		// 		//添加标注点
		// 		viewer.entities.add({
		// 			id: id,
		// 			name: name,
		// 			// position: cartesian,
		// 			position: Cesium.Cartesian3.fromDegrees(log_String, lat_String),
		// 			point: { pixelSize: 5, color: Cesium.Color.RED, outlineColor: Cesium.Color.WHITE, outlineWidth: 1 },
		// 			//字体标签样式
		// 			label: {
		// 				text: '精度：' + log_String + '\n' + '纬度：' + lat_String + '\n' + '高程：' + alti_String,
		// 				font: '12px Helvetica',
		// 				fillColor: Cesium.Color.SKYBLUE,
		// 				outlineColor: Cesium.Color.BLACK,
		// 				outlineWidth: 2,
		// 				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
		// 			},
		// 		});
		// 		id = id + 1;
		// 	}
		// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
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
	function deleteCoordinateLabel(event) {
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
		handler.setInputAction(function (event) {
			var pick = viewer.scene.pick(event.position);
			if (Cesium.defined(pick) && RegExp(/CoordinateLabel/).test(pick.id.id)) {
				var selectEntity = viewer.entities.getById(pick.id.id);
				viewer.entities.remove(selectEntity);
			}
		}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
	}
});
