define(['Cesium', 'jquery'], function (Cesium, $) {
	window.onresize = function onresize() {
		/*窗体初始化*/
		var ocontainerFluid = document.getElementById('container-fluid');
		var oNavbar = document.getElementById('nav');
		var oMap = document.getElementById('cesiumdiv');
		var size = {
			width: window.innerWidth || document.body.clientWidth,
			height: window.innerHeight || document.body.clientHeight,
		};
		oMap.style.height = size.height - oNavbar.offsetHeight + 20 + 'px';
		// 设置无滚动条
		document.documentElement ? (document.documentElement.style.overflow = 'hidden') : (document.body.style.overflow = 'hidden');
		// 重新加载css
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = '/css/layersTool.css';
		document.getElementsByTagName('head')[0].appendChild(link);
		//重新设置导航栏
		var compassDIv = document.getElementsByClassName('compass');
		var navigationDIV = document.getElementsByClassName('navigation-controls');
		compassDIv[0].style.top = oMap.clientHeight - 200 + 'px';
		navigationDIV[0].style.top = oMap.clientHeight - 100 + 'px';
		compassDIv[0].style.left = oMap.clientWidth - 90 + 'px';
		navigationDIV[0].style.left = oMap.clientWidth - 58 + 'px';
	};
	// 设置无滚动条
	document.documentElement ? (document.documentElement.style.overflow = 'hidden') : (document.body.style.overflow = 'hidden');
	/*窗体初始化*/
	var ocontainerFluid = document.getElementById('container-fluid');
	var oNavbar = document.getElementById('nav');
	var oMap = document.getElementById('cesiumdiv');
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight,
	};
	oMap.style.height = size.height - oNavbar.offsetHeight + 20 + 'px';
	/*cesium 初始化*/
	//设置默认视点,需要在设置viewer之先设置
	Cesium.Ion.defaultAccessToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZDFlN2QyNi05NTMyLTRkZjMtYjM3Ni1iZTQzY2M1NGVhNjAiLCJpZCI6Mjg2NjUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTEzMjY3MDJ9.h-nWrkKCjr308Y1iOz28f26eogyP6ZPfgfo1pny_vl0';
	var china = Cesium.Rectangle.fromDegrees(100, 10, 120, 70);
	Cesium.Camera.DEFAULT_VIEW_RECTANGLE = china;
	viewer = new Cesium.Viewer('cesiumdiv', {
		animation: false, //动画控件
		baseLayerPicker: false, //图层选择
		timeline: false, //时间线
		geocoder: false, //地址搜索控件
		navigationHelpButton: false, //帮助图标
		sceneModePicker: false,
		homeButton: false,
		fullscreenButton: false,
		// vrButton: true,
		infoBox: false, //设置为false信息窗口将不再弹出
	});

	/*            工具管理             */
	$(function () {
		$('#toolBox #measureDistance').on('click', function (handler) {
			measureLineSpace(viewer, handler);
		});
		$('#toolBox #measureArea').on('click', function (handler) {
			measureAreaSpace(viewer, handler);
		});
	});
	// 导航栏;
	require(['CesiumNavigation/viewerCesiumNavigationMixin'], function (viewerCesiumNavigationMixin) {
		viewerCesiumNavigationMixin(viewer);
		//重新设置导航栏
		var compassDIv = document.getElementsByClassName('compass');
		var navigationDIV = document.getElementsByClassName('navigation-controls');
		compassDIv[0].style.top = oMap.clientHeight - 200 + 'px';
		navigationDIV[0].style.top = oMap.clientHeight - 100 + 'px';
		compassDIv[0].style.left = oMap.clientWidth - 90 + 'px';
		navigationDIV[0].style.left = oMap.clientWidth - 58 + 'px';
	});

	//控制视角不转到地下
	$(function () {
		$('.cesium-credit-logoContainer').remove();
		$('.cesium-credit-expand-link').remove();
		var hnbd_widget =
			"<div class='cesium-credit-logoContainer' style='display: inline;'><div style='display: inline;'><a href='http://www.beidou-hn.com/' target='_blank'><img title='Cesium ion' src='img/logo/logo.png' height='35px'></a></div></div>";
		$('.cesium-widget-credits').html(hnbd_widget);
	});
	// <!-- 经纬度实时显示 -->
	var longitude_show = document.getElementById('longitude_show');
	var latitude_show = document.getElementById('latitude_show');
	var altitude_show = document.getElementById('altitude_show');
	var canvas = viewer.scene.canvas;
	//具体事件的实现
	var ellipsoid = viewer.scene.globe.ellipsoid;
	var handler = new Cesium.ScreenSpaceEventHandler(canvas);
	handler.setInputAction(function (movement) {
		//捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
		var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
		if (cartesian) {
			//将笛卡尔三维坐标转为地图坐标（弧度）
			var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
			//将地图坐标（弧度）转为十进制的度数
			var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
			var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
			var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
			longitude_show.innerHTML = log_String;
			latitude_show.innerHTML = lat_String;
			altitude_show.innerHTML = alti_String;
		}
	}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
