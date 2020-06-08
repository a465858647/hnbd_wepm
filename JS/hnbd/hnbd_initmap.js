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
	};
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
		//infoBox: false,//设置为false信息窗口将不再弹出
	});
	// 显示FPS
	viewer.scene.debugShowFramesPerSecond = true;
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
	// //导航栏
	// viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

	//控制视角不转到地下
	$(function () {
		$('.cesium-credit-logoContainer').remove();
		$('.cesium-credit-expand-link').remove();
		var hnbd_widget =
			"<div class='cesium-credit-logoContainer' style='display: inline;'><div style='display: inline;'><a href='http://www.beidou-hn.com/' target='_blank'><img title='Cesium ion' src='img/logo/logo.png' height='35px'></a></div></div>";
		$('.cesium-widget-credits').html(hnbd_widget);
	});
});
