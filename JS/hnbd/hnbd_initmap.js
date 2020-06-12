define(['cesium', 'jquery'], function (Cesium, $) {
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
	};
	// 设置无滚动条
	document.documentElement ? (document.documentElement.style.overflow = 'hidden') : (document.body.style.overflow = 'hidden');
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
		infoBox: true, //设置为false信息窗口将不再弹出
	});
	// 显示FPS
	viewer.scene.debugShowFramesPerSecond = true;

	/*            工具管理             */
	$(function () {
		$('#toolBox #measureDistance').on('click', function (handler) {
			measureLineSpace(viewer, handler);
		});
		$('#toolBox #measureArea').on('click', function (handler) {
			measureAreaSpace(viewer, handler);
		});
	});
	// //导航栏
	// require(['../node_modules/cesium-navigation-es6-master/viewerCesiumNavigationMixin.js', 'cesium'], function (CesiumNavigation, Cesium) {
	// 	var options = {};
	// 	// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
	// 	options.defaultResetView = Cesium.Rectangle.fromDegrees(80, 22, 130, 50);
	// 	// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
	// 	options.enableCompass = true;
	// 	// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
	// 	options.enableZoomControls = true;
	// 	// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
	// 	options.enableDistanceLegend = true;
	// 	// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
	// 	options.enableCompassOuterRing = true;
	// 	CesiumNavigation(viewer, options);
	// });

	//控制视角不转到地下
	$(function () {
		$('.cesium-credit-logoContainer').remove();
		$('.cesium-credit-expand-link').remove();
		var hnbd_widget =
			"<div class='cesium-credit-logoContainer' style='display: inline;'><div style='display: inline;'><a href='http://www.beidou-hn.com/' target='_blank'><img title='Cesium ion' src='img/logo/logo.png' height='35px'></a></div></div>";
		$('.cesium-widget-credits').html(hnbd_widget);
	});
});
