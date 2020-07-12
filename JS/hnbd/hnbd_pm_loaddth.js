define(['Cesium'], function (Cesium) {
	var dthEntities = new Cesium.EntityCollection();
	function loadDth() {
		function addEntity23() {
			var position = Cesium.Cartesian3.fromDegrees(114.1193974, 34.838955, 78.12);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 20000 },
			});
			dthEntities.add(entity);
		}
		addEntity23();
		function addEntity24() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200767, 34.8208814, 76.97);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(5);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity24();
		function addEntity25() {
			var position = Cesium.Cartesian3.fromDegrees(114.1191786, 34.8028601, 76.16);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity25();
		function addEntity26() {
			var position = Cesium.Cartesian3.fromDegrees(114.1224137, 34.7880481, 72.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(352);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity26();
		function addEntity27() {
			var position = Cesium.Cartesian3.fromDegrees(114.1237456, 34.7806687, 77.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt005',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity27();
		function addEntity28() {
			var position = Cesium.Cartesian3.fromDegrees(114.1245108, 34.7644597, 76.59);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(182);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt006',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity28();
		function addEntity43() {
			var position = Cesium.Cartesian3.fromDegrees(114.1209642, 34.7407104, 74.93);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(30);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity43();
		function addEntity56() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244054, 34.7513151, 73.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(19);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity56();
		function addEntity57() {
			var position = Cesium.Cartesian3.fromDegrees(114.124712, 34.7506612, 73.94);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(198);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity57();
		function addEntity58() {
			var position = Cesium.Cartesian3.fromDegrees(114.1176433, 34.7297715, 75.45);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(18);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity58();
		function addEntity60() {
			var position = Cesium.Cartesian3.fromDegrees(114.1276216, 34.7043768, 79.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(70);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt011',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity60();
		function addEntity61() {
			var position = Cesium.Cartesian3.fromDegrees(114.1287333, 34.6966275, 75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(4);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt012',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity61();
		function addEntity63() {
			var position = Cesium.Cartesian3.fromDegrees(114.1261893, 34.6807829, 75.01);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(171);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt013',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity63();
		function addEntity64() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244578, 34.7128668, 75.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(2);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt014',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity64();
		function addEntity88() {
			var position = Cesium.Cartesian3.fromDegrees(114.1250963, 34.664446, 75.12);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt015',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity88();
		function addEntity89() {
			var position = Cesium.Cartesian3.fromDegrees(114.1247309, 34.6461246, 73.24);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt016',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity89();
		function addEntity113() {
			var position = Cesium.Cartesian3.fromDegrees(114.1236014, 34.6405484, 74.14);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt017',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity113();
		function addEntity114() {
			var position = Cesium.Cartesian3.fromDegrees(114.1206248, 34.6260884, 75.96);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(20);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt018',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity114();
		function addEntity116() {
			var position = Cesium.Cartesian3.fromDegrees(114.1092108, 34.589619, 72.11);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt019',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity116();
		function addEntity117() {
			var position = Cesium.Cartesian3.fromDegrees(114.1152657, 34.6072131, 74);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt020',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity117();
		function addEntity140() {
			var position = Cesium.Cartesian3.fromDegrees(114.0877827, 34.5575905, 76.79);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(35);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt021',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity140();
		function addEntity141() {
			var position = Cesium.Cartesian3.fromDegrees(114.0835908, 34.5408918, 79.68);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(35);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt022',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity141();
		function addEntity142() {
			var position = Cesium.Cartesian3.fromDegrees(114.0744573, 34.5315743, 78.47);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(220);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt023',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity142();
		function addEntity143() {
			var position = Cesium.Cartesian3.fromDegrees(114.0622402, 34.5254875, 80.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(220);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt024',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity143();
		function addEntity144() {
			var position = Cesium.Cartesian3.fromDegrees(114.0540622, 34.5187409, 81.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(45);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt025',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity144();
		function addEntity145() {
			var position = Cesium.Cartesian3.fromDegrees(114.0485574, 34.5077758, 84.98);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(30);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt026',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity145();
		function addEntity147() {
			var position = Cesium.Cartesian3.fromDegrees(114.0997165, 34.5747904, 76.82);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(200);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt027',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity147();
		function addEntity148() {
			var position = Cesium.Cartesian3.fromDegrees(114.0462591, 34.4993663, 81.83);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(25);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt028',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity148();
		function addEntity172() {
			var position = Cesium.Cartesian3.fromDegrees(114.0431371, 34.4879353, 84.85);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(20);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt029',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity172();
		function addEntity173() {
			var position = Cesium.Cartesian3.fromDegrees(114.0434245, 34.4875906, 84.63);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(5);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt030',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity173();
		function addEntity174() {
			var position = Cesium.Cartesian3.fromDegrees(114.0408901, 34.4699095, 95.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt031',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity174();
		function addEntity176() {
			var position = Cesium.Cartesian3.fromDegrees(114.0460136, 34.4544821, 88.34);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(0);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt032',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity176();
		function addEntity177() {
			var position = Cesium.Cartesian3.fromDegrees(114.0496857, 34.4466932, 81.74);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(165);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt033',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity177();
		function addEntity194() {
			var position = Cesium.Cartesian3.fromDegrees(114.0619006, 34.427781, 84.21);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt034',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity194();
		function addEntity297() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204835, 34.255895, 65.87);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt035',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity297();
		function addEntity324() {
			var position = Cesium.Cartesian3.fromDegrees(114.2002701, 34.2122258, 60.62);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt044',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity324();
		function addEntity342() {
			var position = Cesium.Cartesian3.fromDegrees(114.2488015, 34.1693831, 60.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt045',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity342();
		function addEntity343() {
			var position = Cesium.Cartesian3.fromDegrees(114.2950992, 34.1010105, 55.03);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt046',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity343();
		function addEntity344() {
			var position = Cesium.Cartesian3.fromDegrees(114.2951814, 34.1010915, 55.03);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt047',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity344();
		function addEntity345() {
			var position = Cesium.Cartesian3.fromDegrees(114.3001928, 34.0974388, 57.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(120);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt048',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity345();
		function addEntity346() {
			var position = Cesium.Cartesian3.fromDegrees(114.3011588, 34.0970759, 58.02);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(300);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt049',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity346();
		function addEntity347() {
			var position = Cesium.Cartesian3.fromDegrees(114.3116334, 34.0776484, 59.32);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt050',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity347();
		function addEntity349() {
			var position = Cesium.Cartesian3.fromDegrees(114.3119772, 34.0670138, 50.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(165);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt051',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity349();
		function addEntity350() {
			var position = Cesium.Cartesian3.fromDegrees(114.3138082, 34.0667526, 46.34);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(55);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt052',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity350();
		function addEntity351() {
			var position = Cesium.Cartesian3.fromDegrees(114.3136236, 34.0663246, 48.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(47);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt053',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity351();
		function addEntity352() {
			var position = Cesium.Cartesian3.fromDegrees(114.3136579, 34.066297, 48.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(223);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt054',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity352();
		function addEntity353() {
			var position = Cesium.Cartesian3.fromDegrees(114.313748, 34.0662288, 48.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(223);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt055',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity353();
		function addEntity371() {
			var position = Cesium.Cartesian3.fromDegrees(114.321192, 33.9877104, 52.33);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt056',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity371();
		function addEntity373() {
			var position = Cesium.Cartesian3.fromDegrees(114.3236186, 33.9790541, 55.17);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt057',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity373();
		function addEntity374() {
			var position = Cesium.Cartesian3.fromDegrees(114.3251002, 33.974351, 55.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt058',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity374();
		function addEntity377() {
			var position = Cesium.Cartesian3.fromDegrees(114.3476956, 33.9498032, 48.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(311);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt059',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity377();
		function addEntity378() {
			var position = Cesium.Cartesian3.fromDegrees(114.3478072, 33.9498879, 48.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(131);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt060',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity378();
		function addEntity379() {
			var position = Cesium.Cartesian3.fromDegrees(114.3844206, 33.8952618, 53.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt061',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity379();
		function addEntity397() {
			var position = Cesium.Cartesian3.fromDegrees(114.4177623, 33.832623, 47.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt062',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity397();
		function addEntity398() {
			var position = Cesium.Cartesian3.fromDegrees(114.4178405, 33.83267, 47.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt063',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity398();
		function addEntity400() {
			var position = Cesium.Cartesian3.fromDegrees(114.4254555, 33.8232005, 48.88);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt064',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity400();
		function addEntity401() {
			var position = Cesium.Cartesian3.fromDegrees(114.4283798, 33.8217781, 47.41);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(97);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt065',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity401();
		function addEntity402() {
			var position = Cesium.Cartesian3.fromDegrees(114.4283816, 33.821656, 47.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(85);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt066',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity402();
		function addEntity403() {
			var position = Cesium.Cartesian3.fromDegrees(114.4283824, 33.8215942, 47.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(85);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt067',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity403();
		function addEntity404() {
			var position = Cesium.Cartesian3.fromDegrees(114.4286812, 33.8214832, 46.84);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(64);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt068',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity404();
		function addEntity423() {
			var position = Cesium.Cartesian3.fromDegrees(114.4697104, 33.7661059, 52.31);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt069',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity423();
		function addEntity424() {
			var position = Cesium.Cartesian3.fromDegrees(114.4669582, 33.7674749, 44.51);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(90);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt070',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity424();
		function addEntity425() {
			var position = Cesium.Cartesian3.fromDegrees(114.4674308, 33.767282, 43.67);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(92);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt071',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity425();
		function addEntity426() {
			var position = Cesium.Cartesian3.fromDegrees(114.4674305, 33.7672499, 43.67);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(272);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt072',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity426();
		function addEntity427() {
			var position = Cesium.Cartesian3.fromDegrees(114.4674034, 33.767079, 44.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(290);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt073',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity427();
		function addEntity445() {
			var position = Cesium.Cartesian3.fromDegrees(114.5069362, 33.7183308, 48.51);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(115);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt074',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity445();
		function addEntity446() {
			var position = Cesium.Cartesian3.fromDegrees(114.5080285, 33.7179329, 48.43);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt075',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity446();
		function addEntity448() {
			var position = Cesium.Cartesian3.fromDegrees(114.5416237, 33.678981, 44.1);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(320);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt076',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity448();
		function addEntity449() {
			var position = Cesium.Cartesian3.fromDegrees(114.54171, 33.6790408, 44.1);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(140);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt077',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity449();
		function addEntity450() {
			var position = Cesium.Cartesian3.fromDegrees(114.5485347, 33.6715907, 51.2);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt078',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity450();
		function addEntity451() {
			var position = Cesium.Cartesian3.fromDegrees(114.5580955, 33.6616081, 43.27);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(320);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt079',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity451();
		function addEntity452() {
			var position = Cesium.Cartesian3.fromDegrees(114.5583257, 33.6617065, 48.33);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/cssxt/cssxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt080',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity452();
		function addEntity215() {
			var position = Cesium.Cartesian3.fromDegrees(114.1176775, 34.7305509, 69.21);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(90);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity215();
		function addEntity225() {
			var position = Cesium.Cartesian3.fromDegrees(114.1182696, 34.7264183, 68.56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(260);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity225();
		function addEntity234() {
			var position = Cesium.Cartesian3.fromDegrees(114.1190831, 34.7221989, 66.04);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(70);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity234();
		function addEntity244() {
			var position = Cesium.Cartesian3.fromDegrees(114.1215206, 34.7183959, 70.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(240);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity244();
		function addEntity252() {
			var position = Cesium.Cartesian3.fromDegrees(114.1236182, 34.7143883, 70.87);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(60);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz05',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity252();
		function addEntity256() {
			var position = Cesium.Cartesian3.fromDegrees(114.1242337, 34.7132928, 69.46);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(65);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz06',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity256();
		function addEntity264() {
			var position = Cesium.Cartesian3.fromDegrees(114.125969, 34.7105961, 66.56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(250);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity264();
		function addEntity272() {
			var position = Cesium.Cartesian3.fromDegrees(114.1271587, 34.7063787, 70.4);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(75);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity272();
		function addEntity283() {
			var position = Cesium.Cartesian3.fromDegrees(114.1285669, 34.7022426, 74.24);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(260);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity283();
		function addEntity292() {
			var position = Cesium.Cartesian3.fromDegrees(114.128732, 34.6977885, 69.94);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/c-v2xjz/c-v2xjz.gltf';
			var heading = Cesium.Math.toRadians(85);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'c-v2xjz010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity292();
		function addEntity1() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200378, 34.7973234, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity1();
		function addEntity2() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200539, 34.7973258, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity2();
		function addEntity3() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200711, 34.7973283, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity3();
		function addEntity4() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201017, 34.7973327, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity4();
		function addEntity5() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201189, 34.7973352, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt005',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity5();
		function addEntity6() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201348, 34.7973374, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt006',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity6();
		function addEntity7() {
			var position = Cesium.Cartesian3.fromDegrees(114.120152, 34.7973399, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity7();
		function addEntity8() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200318, 34.7973083, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity8();
		function addEntity9() {
			var position = Cesium.Cartesian3.fromDegrees(114.1200642, 34.797313, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity9();
		function addEntity10() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201127, 34.79732, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity10();
		function addEntity11() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201452, 34.7973247, 70.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt011',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity11();
		function addEntity12() {
			var position = Cesium.Cartesian3.fromDegrees(114.1203886, 34.7966468, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt012',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity12();
		function addEntity13() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204208, 34.7966515, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt013',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity13();
		function addEntity14() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204694, 34.7966585, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt014',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity14();
		function addEntity15() {
			var position = Cesium.Cartesian3.fromDegrees(114.1205027, 34.7966633, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt015',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity15();
		function addEntity16() {
			var position = Cesium.Cartesian3.fromDegrees(114.1203817, 34.7966315, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt016',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity16();
		function addEntity17() {
			var position = Cesium.Cartesian3.fromDegrees(114.1203989, 34.796634, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt017',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity17();
		function addEntity18() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204149, 34.7966364, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt018',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity18();
		function addEntity19() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204312, 34.7966387, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt019',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity19();
		function addEntity20() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204628, 34.7966433, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt020',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity20();
		function addEntity21() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204799, 34.7966457, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt021',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity21();
		function addEntity22() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204959, 34.796648, 70.66);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(170);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt022',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity22();
		function addEntity32() {
			var position = Cesium.Cartesian3.fromDegrees(114.1211925, 34.7410736, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt023',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity32();
		function addEntity33() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212073, 34.7410687, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt024',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity33();
		function addEntity34() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212237, 34.7410632, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt025',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity34();
		function addEntity35() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212523, 34.7410537, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt026',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity35();
		function addEntity36() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212687, 34.7410481, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt027',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity36();
		function addEntity37() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212834, 34.7410432, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt028',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity37();
		function addEntity38() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212995, 34.7410378, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(24);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt029',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity38();
		function addEntity39() {
			var position = Cesium.Cartesian3.fromDegrees(114.1211777, 34.7410634, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(204);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt030',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity39();
		function addEntity40() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212088, 34.741053, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(204);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt031',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity40();
		function addEntity41() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212537, 34.741038, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(204);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt032',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity41();
		function addEntity42() {
			var position = Cesium.Cartesian3.fromDegrees(114.1212846, 34.7410276, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(204);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt033',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity42();
		function addEntity45() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208603, 34.7399771, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(201);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt034',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity45();
		function addEntity46() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208915, 34.7399667, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(201);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt035',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity46();
		function addEntity47() {
			var position = Cesium.Cartesian3.fromDegrees(114.1209368, 34.7399515, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(201);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt036',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity47();
		function addEntity48() {
			var position = Cesium.Cartesian3.fromDegrees(114.120968, 34.739941, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(201);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt037',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity48();
		function addEntity49() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208451, 34.739967, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt038',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity49();
		function addEntity50() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208612, 34.7399616, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt039',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity50();
		function addEntity51() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208762, 34.7399566, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt040',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity51();
		function addEntity52() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208916, 34.7399514, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt041',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity52();
		function addEntity53() {
			var position = Cesium.Cartesian3.fromDegrees(114.1209212, 34.7399415, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt042',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity53();
		function addEntity54() {
			var position = Cesium.Cartesian3.fromDegrees(114.1209372, 34.7399361, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt043',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity54();
		function addEntity55() {
			var position = Cesium.Cartesian3.fromDegrees(114.1209522, 34.7399311, 71.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(21);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt044',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity55();
		function addEntity66() {
			var position = Cesium.Cartesian3.fromDegrees(114.125038, 34.7118101, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt045',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity66();
		function addEntity67() {
			var position = Cesium.Cartesian3.fromDegrees(114.1250528, 34.7118153, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt046',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity67();
		function addEntity68() {
			var position = Cesium.Cartesian3.fromDegrees(114.125069, 34.7118209, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt047',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity68();
		function addEntity69() {
			var position = Cesium.Cartesian3.fromDegrees(114.1250975, 34.7118309, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt048',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity69();
		function addEntity70() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251137, 34.7118365, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt049',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity70();
		function addEntity71() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251285, 34.7118417, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt050',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity71();
		function addEntity72() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251447, 34.7118473, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(337);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt051',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity72();
		function addEntity73() {
			var position = Cesium.Cartesian3.fromDegrees(114.125036, 34.7117941, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt052',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity73();
		function addEntity74() {
			var position = Cesium.Cartesian3.fromDegrees(114.1250667, 34.7118048, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt053',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity74();
		function addEntity75() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251114, 34.7118204, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt054',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity75();
		function addEntity76() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251423, 34.7118312, 69.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt055',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity76();
		function addEntity77() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255396, 34.7112081, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt056',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity77();
		function addEntity78() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255704, 34.7112178, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt057',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity78();
		function addEntity79() {
			var position = Cesium.Cartesian3.fromDegrees(114.125616, 34.7112322, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt058',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity79();
		function addEntity80() {
			var position = Cesium.Cartesian3.fromDegrees(114.1256474, 34.7112421, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt059',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity80();
		function addEntity81() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255364, 34.711192, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt060',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity81();
		function addEntity82() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255526, 34.7111971, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt061',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity82();
		function addEntity83() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255681, 34.711202, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt062',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity83();
		function addEntity84() {
			var position = Cesium.Cartesian3.fromDegrees(114.1255832, 34.7112068, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt063',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity84();
		function addEntity85() {
			var position = Cesium.Cartesian3.fromDegrees(114.1256135, 34.7112163, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt064',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity85();
		function addEntity86() {
			var position = Cesium.Cartesian3.fromDegrees(114.1256293, 34.7112213, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt065',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity86();
		function addEntity87() {
			var position = Cesium.Cartesian3.fromDegrees(114.1256445, 34.7112261, 69.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt066',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity87();
		function addEntity90() {
			var position = Cesium.Cartesian3.fromDegrees(114.1242994, 34.643765, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt067',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity90();
		function addEntity91() {
			var position = Cesium.Cartesian3.fromDegrees(114.124315, 34.643763, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt068',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity91();
		function addEntity92() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243323, 34.6437607, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt069',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity92();
		function addEntity93() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243632, 34.6437566, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt070',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity93();
		function addEntity94() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243802, 34.6437544, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt071',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity94();
		function addEntity95() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243961, 34.6437523, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt072',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity95();
		function addEntity96() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244134, 34.64375, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt073',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity96();
		function addEntity97() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244008, 34.6437374, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt074',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity97();
		function addEntity98() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243682, 34.6437417, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt075',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity98();
		function addEntity99() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243202, 34.643748, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt076',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity99();
		function addEntity100() {
			var position = Cesium.Cartesian3.fromDegrees(114.1242871, 34.6437524, 68.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt077',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity100();
		function addEntity101() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243851, 34.6431984, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt078',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity101();
		function addEntity102() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244183, 34.643194, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt079',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity102();
		function addEntity103() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244665, 34.6431876, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt080',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity103();
		function addEntity104() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244993, 34.6431833, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(10);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt081',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity104();
		function addEntity105() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243729, 34.6431857, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt082',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity105();
		function addEntity106() {
			var position = Cesium.Cartesian3.fromDegrees(114.1243898, 34.6431835, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt083',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity106();
		function addEntity107() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244059, 34.6431814, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt084',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity107();
		function addEntity108() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244221, 34.6431792, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt085',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity108();
		function addEntity109() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244538, 34.6431751, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt086',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity109();
		function addEntity110() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244709, 34.6431728, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt087',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity110();
		function addEntity111() {
			var position = Cesium.Cartesian3.fromDegrees(114.1244871, 34.6431706, 68.55);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(190);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt088',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity111();
		function addEntity118() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171777, 34.6127702, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt089',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity118();
		function addEntity119() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171932, 34.6127665, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt090',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity119();
		function addEntity120() {
			var position = Cesium.Cartesian3.fromDegrees(114.11721, 34.6127625, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt091',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity120();
		function addEntity121() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172405, 34.6127553, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt092',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity121();
		function addEntity122() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172568, 34.6127514, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt093',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity122();
		function addEntity123() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172719, 34.6127479, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt094',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity123();
		function addEntity124() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172888, 34.6127438, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt095',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity124();
		function addEntity125() {
			var position = Cesium.Cartesian3.fromDegrees(114.117164, 34.6127587, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt096',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity125();
		function addEntity126() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171957, 34.6127513, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt097',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity126();
		function addEntity127() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172425, 34.6127402, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt098',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity127();
		function addEntity128() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172746, 34.6127325, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt099',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity128();
		function addEntity129() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171325, 34.6120213, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt100',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity129();
		function addEntity130() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171644, 34.6120142, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt101',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity130();
		function addEntity131() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172119, 34.6120037, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt102',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity131();
		function addEntity132() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172437, 34.6119966, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(15);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt103',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity132();
		function addEntity133() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171184, 34.6120098, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt104',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity133();
		function addEntity134() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171352, 34.6120061, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt105',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity134();
		function addEntity135() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171509, 34.6120026, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt106',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity135();
		function addEntity136() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171671, 34.6119991, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt107',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity136();
		function addEntity137() {
			var position = Cesium.Cartesian3.fromDegrees(114.1171979, 34.6119922, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt108',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity137();
		function addEntity138() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172143, 34.6119885, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt109',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity138();
		function addEntity139() {
			var position = Cesium.Cartesian3.fromDegrees(114.1172301, 34.611985, 66.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(195);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt110',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity139();
		function addEntity149() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464204, 34.4998099, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt111',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity149();
		function addEntity150() {
			var position = Cesium.Cartesian3.fromDegrees(114.046436, 34.4998068, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt112',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity150();
		function addEntity151() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464532, 34.4998035, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt113',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity151();
		function addEntity152() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464837, 34.4997977, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt114',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity152();
		function addEntity153() {
			var position = Cesium.Cartesian3.fromDegrees(114.0465003, 34.4997946, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt115',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity153();
		function addEntity154() {
			var position = Cesium.Cartesian3.fromDegrees(114.0465157, 34.4997916, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt116',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity154();
		function addEntity155() {
			var position = Cesium.Cartesian3.fromDegrees(114.0465328, 34.4997883, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt117',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity155();
		function addEntity156() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464072, 34.499798, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt118',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity156();
		function addEntity157() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464396, 34.4997918, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt119',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity157();
		function addEntity158() {
			var position = Cesium.Cartesian3.fromDegrees(114.046487, 34.4997826, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt120',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity158();
		function addEntity159() {
			var position = Cesium.Cartesian3.fromDegrees(114.0465193, 34.4997764, 77.48);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt121',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity159();
		function addEntity160() {
			var position = Cesium.Cartesian3.fromDegrees(114.0463261, 34.4987218, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt122',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity160();
		function addEntity161() {
			var position = Cesium.Cartesian3.fromDegrees(114.0463584, 34.4987156, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt123',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity161();
		function addEntity162() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464057, 34.4987066, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt124',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity162();
		function addEntity163() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464384, 34.4987003, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(13);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt125',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity163();
		function addEntity164() {
			var position = Cesium.Cartesian3.fromDegrees(114.0463125, 34.49871, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt126',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity164();
		function addEntity165() {
			var position = Cesium.Cartesian3.fromDegrees(114.0463292, 34.4987068, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt127',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity165();
		function addEntity166() {
			var position = Cesium.Cartesian3.fromDegrees(114.046345, 34.4987038, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt128',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity166();
		function addEntity167() {
			var position = Cesium.Cartesian3.fromDegrees(114.046361, 34.4987007, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt129',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity167();
		function addEntity168() {
			var position = Cesium.Cartesian3.fromDegrees(114.0463922, 34.4986947, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt130',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity168();
		function addEntity169() {
			var position = Cesium.Cartesian3.fromDegrees(114.046409, 34.4986915, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt131',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity169();
		function addEntity170() {
			var position = Cesium.Cartesian3.fromDegrees(114.0464249, 34.4986884, 77.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(193);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt132',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity170();
		function addEntity178() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535217, 34.4407673, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt133',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity178();
		function addEntity179() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535505, 34.4407809, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt134',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity179();
		function addEntity180() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535678, 34.4407892, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt135',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity180();
		function addEntity181() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535785, 34.4407944, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt136',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity181();
		function addEntity182() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535924, 34.440801, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt137',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity182();
		function addEntity183() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535219, 34.440751, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt138',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity183();
		function addEntity184() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535506, 34.4407648, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt139',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity184();
		function addEntity185() {
			var position = Cesium.Cartesian3.fromDegrees(114.0535925, 34.4407848, 75.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt140',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity185();
		function addEntity186() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543074, 34.4399659, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt141',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity186();
		function addEntity187() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543468, 34.4399895, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt142',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity187();
		function addEntity188() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543736, 34.4400056, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt143',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity188();
		function addEntity189() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543099, 34.4399499, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt144',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity189();
		function addEntity190() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543232, 34.4399579, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt145',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity190();
		function addEntity191() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543332, 34.4399639, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt146',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity191();
		function addEntity192() {
			var position = Cesium.Cartesian3.fromDegrees(114.0543492, 34.4399736, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt147',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity192();
		function addEntity193() {
			var position = Cesium.Cartesian3.fromDegrees(114.054376, 34.4399897, 75.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt148',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity193();
		function addEntity198() {
			var position = Cesium.Cartesian3.fromDegrees(114.0646795, 34.4047965, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt149',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity198();
		function addEntity199() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647126, 34.4047975, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt150',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity199();
		function addEntity200() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647323, 34.4047981, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt151',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity200();
		function addEntity201() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647444, 34.4047984, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt152',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity201();
		function addEntity202() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647609, 34.4047989, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt153',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity202();
		function addEntity203() {
			var position = Cesium.Cartesian3.fromDegrees(114.0646701, 34.4047823, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt154',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity203();
		function addEntity204() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647033, 34.4047832, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt155',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity204();
		function addEntity205() {
			var position = Cesium.Cartesian3.fromDegrees(114.0647523, 34.4047846, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt156',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity205();
		function addEntity206() {
			var position = Cesium.Cartesian3.fromDegrees(114.064911, 34.4035127, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt157',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity206();
		function addEntity207() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649597, 34.4035141, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt158',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity207();
		function addEntity208() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649923, 34.4035151, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(358);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt159',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity208();
		function addEntity209() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649021, 34.4034983, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt160',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity209();
		function addEntity210() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649183, 34.4034988, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt161',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity210();
		function addEntity211() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649305, 34.4034991, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt162',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity211();
		function addEntity212() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649506, 34.4034997, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt163',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity212();
		function addEntity213() {
			var position = Cesium.Cartesian3.fromDegrees(114.0649836, 34.4035006, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(178);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt164',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity213();
		function addEntity298() {
			var position = Cesium.Cartesian3.fromDegrees(114.1207446, 34.2557583, 61.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(329);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt036',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity298();
		function addEntity299() {
			var position = Cesium.Cartesian3.fromDegrees(114.120709, 34.2557406, 61.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(329);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt037',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity299();
		function addEntity300() {
			var position = Cesium.Cartesian3.fromDegrees(114.1206824, 34.2557273, 61.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(329);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt038',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity300();
		function addEntity301() {
			var position = Cesium.Cartesian3.fromDegrees(114.1469869, 34.2384297, 68.83);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt039',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity301();
		function addEntity302() {
			var position = Cesium.Cartesian3.fromDegrees(114.1511577, 34.2368224, 68.93);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt040',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity302();
		function addEntity304() {
			var position = Cesium.Cartesian3.fromDegrees(114.181544, 34.2224472, 55.64);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(124);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt041',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity304();
		function addEntity305() {
			var position = Cesium.Cartesian3.fromDegrees(114.1815848, 34.2224973, 55.64);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(124);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt042',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity305();
		function addEntity306() {
			var position = Cesium.Cartesian3.fromDegrees(114.1815985, 34.2225142, 55.64);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(124);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'cssxt043',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity306();
		function addEntity307() {
			var position = Cesium.Cartesian3.fromDegrees(114.1842806, 34.2206832, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt165',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity307();
		function addEntity308() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843003, 34.2207056, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt166',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity308();
		function addEntity309() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843119, 34.2207188, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt167',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity309();
		function addEntity310() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843191, 34.220727, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt168',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity310();
		function addEntity311() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843287, 34.2207379, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt169',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity311();
		function addEntity312() {
			var position = Cesium.Cartesian3.fromDegrees(114.1842887, 34.2206684, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt170',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity312();
		function addEntity313() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843084, 34.220691, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt171',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity313();
		function addEntity314() {
			var position = Cesium.Cartesian3.fromDegrees(114.1843367, 34.2207231, 56.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt172',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity314();
		function addEntity315() {
			var position = Cesium.Cartesian3.fromDegrees(114.1852847, 34.2202593, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt173',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity315();
		function addEntity316() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853132, 34.2202917, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt174',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity316();
		function addEntity317() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853327, 34.2203139, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(305);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt175',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity317();
		function addEntity318() {
			var position = Cesium.Cartesian3.fromDegrees(114.1852929, 34.2202447, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt176',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity318();
		function addEntity319() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853025, 34.2202556, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt177',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity319();
		function addEntity320() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853096, 34.2202637, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt178',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity320();
		function addEntity321() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853213, 34.220277, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt179',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity321();
		function addEntity322() {
			var position = Cesium.Cartesian3.fromDegrees(114.1853409, 34.2202993, 56.76);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(125);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt180',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity322();
		function addEntity326() {
			var position = Cesium.Cartesian3.fromDegrees(114.2255752, 34.1960793, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt181',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity326();
		function addEntity327() {
			var position = Cesium.Cartesian3.fromDegrees(114.2255999, 34.1960977, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt182',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity327();
		function addEntity328() {
			var position = Cesium.Cartesian3.fromDegrees(114.2256146, 34.1961086, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt183',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity328();
		function addEntity329() {
			var position = Cesium.Cartesian3.fromDegrees(114.2256234, 34.1961152, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt184',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity329();
		function addEntity330() {
			var position = Cesium.Cartesian3.fromDegrees(114.2256357, 34.1961244, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt185',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity330();
		function addEntity331() {
			var position = Cesium.Cartesian3.fromDegrees(114.2255792, 34.1960634, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt186',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity331();
		function addEntity332() {
			var position = Cesium.Cartesian3.fromDegrees(114.2256039, 34.1960818, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt187',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity332();
		function addEntity333() {
			var position = Cesium.Cartesian3.fromDegrees(114.2256398, 34.1961086, 56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt188',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity333();
		function addEntity334() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264313, 34.1954752, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt189',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity334();
		function addEntity335() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264675, 34.1955023, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt190',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity335();
		function addEntity336() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264918, 34.1955204, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt191',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity336();
		function addEntity337() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264358, 34.1954597, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt192',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity337();
		function addEntity338() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264478, 34.1954687, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt193',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity338();
		function addEntity339() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264569, 34.1954755, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt194',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity339();
		function addEntity340() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264717, 34.1954865, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt195',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity340();
		function addEntity341() {
			var position = Cesium.Cartesian3.fromDegrees(114.2264962, 34.1955048, 56.22);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt196',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity341();
		function addEntity355() {
			var position = Cesium.Cartesian3.fromDegrees(114.3177418, 34.0372226, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt197',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity355();
		function addEntity356() {
			var position = Cesium.Cartesian3.fromDegrees(114.3177733, 34.037231, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt198',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity356();
		function addEntity357() {
			var position = Cesium.Cartesian3.fromDegrees(114.317792, 34.037236, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt199',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity357();
		function addEntity358() {
			var position = Cesium.Cartesian3.fromDegrees(114.3178037, 34.0372391, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt200',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity358();
		function addEntity359() {
			var position = Cesium.Cartesian3.fromDegrees(114.3178191, 34.0372433, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt201',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity359();
		function addEntity360() {
			var position = Cesium.Cartesian3.fromDegrees(114.317738, 34.0372068, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt202',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity360();
		function addEntity361() {
			var position = Cesium.Cartesian3.fromDegrees(114.3177694, 34.0372152, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt203',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity361();
		function addEntity362() {
			var position = Cesium.Cartesian3.fromDegrees(114.3178157, 34.0372275, 48.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt204',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity362();
		function addEntity363() {
			var position = Cesium.Cartesian3.fromDegrees(114.3181803, 34.0365086, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt205',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity363();
		function addEntity364() {
			var position = Cesium.Cartesian3.fromDegrees(114.318226, 34.0365215, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt206',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity364();
		function addEntity365() {
			var position = Cesium.Cartesian3.fromDegrees(114.3182576, 34.0365305, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(342);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt207',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity365();
		function addEntity366() {
			var position = Cesium.Cartesian3.fromDegrees(114.3181774, 34.0364929, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt208',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity366();
		function addEntity367() {
			var position = Cesium.Cartesian3.fromDegrees(114.3181924, 34.0364971, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt209',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity367();
		function addEntity368() {
			var position = Cesium.Cartesian3.fromDegrees(114.3182039, 34.0365004, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt210',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity368();
		function addEntity369() {
			var position = Cesium.Cartesian3.fromDegrees(114.3182227, 34.0365058, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt211',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity369();
		function addEntity370() {
			var position = Cesium.Cartesian3.fromDegrees(114.3182542, 34.0365147, 47.73);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(162);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt212',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity370();
		function addEntity380() {
			var position = Cesium.Cartesian3.fromDegrees(114.4110596, 33.8402979, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt213',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity380();
		function addEntity381() {
			var position = Cesium.Cartesian3.fromDegrees(114.4110864, 33.8403141, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt214',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity381();
		function addEntity382() {
			var position = Cesium.Cartesian3.fromDegrees(114.4111023, 33.8403237, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt215',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity382();
		function addEntity383() {
			var position = Cesium.Cartesian3.fromDegrees(114.4111121, 33.8403295, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt216',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity383();
		function addEntity384() {
			var position = Cesium.Cartesian3.fromDegrees(114.4111254, 33.8403375, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt217',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity384();
		function addEntity385() {
			var position = Cesium.Cartesian3.fromDegrees(114.4110617, 33.8402819, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt218',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity385();
		function addEntity386() {
			var position = Cesium.Cartesian3.fromDegrees(114.4110887, 33.8402981, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt219',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity386();
		function addEntity387() {
			var position = Cesium.Cartesian3.fromDegrees(114.4111281, 33.8403218, 48.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt220',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity387();
		function addEntity388() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118297, 33.8396398, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt221',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity388();
		function addEntity389() {
			var position = Cesium.Cartesian3.fromDegrees(114.411869, 33.8396634, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt222',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity389();
		function addEntity390() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118957, 33.8396794, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(324);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt223',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity390();
		function addEntity391() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118322, 33.8396239, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt224',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity391();
		function addEntity392() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118452, 33.8396317, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt225',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity392();
		function addEntity393() {
			var position = Cesium.Cartesian3.fromDegrees(114.411855, 33.8396376, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt226',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity393();
		function addEntity394() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118711, 33.8396473, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt227',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity394();
		function addEntity395() {
			var position = Cesium.Cartesian3.fromDegrees(114.4118978, 33.8396633, 48.3);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(144);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt228',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity395();
		function addEntity406() {
			var position = Cesium.Cartesian3.fromDegrees(114.4570748, 33.7805905, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt229',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity406();
		function addEntity407() {
			var position = Cesium.Cartesian3.fromDegrees(114.4570998, 33.7806085, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt230',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity407();
		function addEntity408() {
			var position = Cesium.Cartesian3.fromDegrees(114.4571148, 33.7806193, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt231',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity408();
		function addEntity409() {
			var position = Cesium.Cartesian3.fromDegrees(114.457124, 33.7806259, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt232',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity409();
		function addEntity410() {
			var position = Cesium.Cartesian3.fromDegrees(114.4571362, 33.7806347, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt233',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity410();
		function addEntity411() {
			var position = Cesium.Cartesian3.fromDegrees(114.4570785, 33.7805746, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt234',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity411();
		function addEntity412() {
			var position = Cesium.Cartesian3.fromDegrees(114.4571036, 33.7805926, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt235',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity412();
		function addEntity413() {
			var position = Cesium.Cartesian3.fromDegrees(114.4571399, 33.7806188, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt236',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity413();
		function addEntity414() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579021, 33.7799868, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt237',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity414();
		function addEntity415() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579388, 33.7800132, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt238',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity415();
		function addEntity416() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579636, 33.780031, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt239',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity416();
		function addEntity417() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579064, 33.7799713, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt240',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity417();
		function addEntity418() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579184, 33.7799799, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt241',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity418();
		function addEntity419() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579278, 33.7799866, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt242',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity419();
		function addEntity420() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579428, 33.7799974, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt243',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity420();
		function addEntity421() {
			var position = Cesium.Cartesian3.fromDegrees(114.4579677, 33.7800153, 47.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(139);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt244',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity421();
		function addEntity429() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817005, 33.7446212, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt245',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity429();
		function addEntity430() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817314, 33.7446305, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt246',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity430();
		function addEntity431() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817502, 33.7446361, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt247',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity431();
		function addEntity432() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817613, 33.7446395, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt248',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity432();
		function addEntity433() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817765, 33.744644, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt249',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity433();
		function addEntity434() {
			var position = Cesium.Cartesian3.fromDegrees(114.4816968, 33.7446051, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt250',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity434();
		function addEntity435() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817282, 33.7446145, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt251',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity435();
		function addEntity436() {
			var position = Cesium.Cartesian3.fromDegrees(114.4817733, 33.7446281, 45.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt252',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity436();
		function addEntity437() {
			var position = Cesium.Cartesian3.fromDegrees(114.4821564, 33.7439488, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt253',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity437();
		function addEntity438() {
			var position = Cesium.Cartesian3.fromDegrees(114.4822024, 33.7439618, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt254',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity438();
		function addEntity439() {
			var position = Cesium.Cartesian3.fromDegrees(114.4822334, 33.7439706, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt255',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity439();
		function addEntity440() {
			var position = Cesium.Cartesian3.fromDegrees(114.4821533, 33.743933, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt256',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity440();
		function addEntity441() {
			var position = Cesium.Cartesian3.fromDegrees(114.4821686, 33.7439373, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt257',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity441();
		function addEntity442() {
			var position = Cesium.Cartesian3.fromDegrees(114.4821801, 33.7439406, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt258',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity442();
		function addEntity443() {
			var position = Cesium.Cartesian3.fromDegrees(114.4821986, 33.7439458, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt259',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity443();
		function addEntity444() {
			var position = Cesium.Cartesian3.fromDegrees(114.4822299, 33.7439547, 45.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/etcsxt/etcsxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'etcsxt260',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity444();
		function addEntity30() {
			var position = Cesium.Cartesian3.fromDegrees(114.1224808, 34.7878387, 65.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(350);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity30();
		function addEntity31() {
			var position = Cesium.Cartesian3.fromDegrees(114.1248675, 34.7646228, 70.2);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity31();
		function addEntity44() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208928, 34.7405, 68.8);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(23);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity44();
		function addEntity59() {
			var position = Cesium.Cartesian3.fromDegrees(114.1201049, 34.7207928, 68.4);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity59();
		function addEntity112() {
			var position = Cesium.Cartesian3.fromDegrees(114.1236543, 34.6407022, 67.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(9);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb005',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity112();
		function addEntity115() {
			var position = Cesium.Cartesian3.fromDegrees(114.1184715, 34.6156338, 65.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(197);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb006',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity115();
		function addEntity146() {
			var position = Cesium.Cartesian3.fromDegrees(114.0539131, 34.5185256, 75.27);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(36);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity146();
		function addEntity171() {
			var position = Cesium.Cartesian3.fromDegrees(114.0454803, 34.4952085, 76.8);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(194);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity171();
		function addEntity195() {
			var position = Cesium.Cartesian3.fromDegrees(114.0544656, 34.4394568, 73.88);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(328);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity195();
		function addEntity197() {
			var position = Cesium.Cartesian3.fromDegrees(114.0644147, 34.4151042, 70.89);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(180);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity197();
		function addEntity323() {
			var position = Cesium.Cartesian3.fromDegrees(114.1875193, 34.2187554, 54.28);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(307);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb011',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity323();
		function addEntity325() {
			var position = Cesium.Cartesian3.fromDegrees(114.211071, 34.2072035, 55.26);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(124);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb012',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity325();
		function addEntity348() {
			var position = Cesium.Cartesian3.fromDegrees(114.3116924, 34.0768259, 52.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(0);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb013',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity348();
		function addEntity354() {
			var position = Cesium.Cartesian3.fromDegrees(114.3127283, 34.055299, 46.12);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(176);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb014',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity354();
		function addEntity375() {
			var position = Cesium.Cartesian3.fromDegrees(114.3417135, 33.9545004, 45.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(133);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb015',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity375();
		function addEntity396() {
			var position = Cesium.Cartesian3.fromDegrees(114.4176585, 33.8326135, 45.85);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb016',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity396();
		function addEntity399() {
			var position = Cesium.Cartesian3.fromDegrees(114.4220836, 33.8274707, 42.91);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb017',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity399();
		function addEntity405() {
			var position = Cesium.Cartesian3.fromDegrees(114.432599, 33.8115106, 45.23);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(157);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb018',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity405();
		function addEntity422() {
			var position = Cesium.Cartesian3.fromDegrees(114.4615314, 33.7761786, 45.12);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb019',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity422();
		function addEntity428() {
			var position = Cesium.Cartesian3.fromDegrees(114.4758099, 33.7564251, 44.95);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/fxqbb/fxqbb.gltf';
			var heading = Cesium.Math.toRadians(151);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'fxqbb020',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity428();
		function addEntity214() {
			var position = Cesium.Cartesian3.fromDegrees(114.1176767, 34.7305464, 69.85);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity214();
		function addEntity216() {
			var position = Cesium.Cartesian3.fromDegrees(114.1176433, 34.7297417, 69.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity216();
		function addEntity217() {
			var position = Cesium.Cartesian3.fromDegrees(114.1181192, 34.7297208, 69.44);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity217();
		function addEntity218() {
			var position = Cesium.Cartesian3.fromDegrees(114.1173022, 34.7294714, 69.84);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity218();
		function addEntity219() {
			var position = Cesium.Cartesian3.fromDegrees(114.1176035, 34.7286193, 69.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt005',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity219();
		function addEntity220() {
			var position = Cesium.Cartesian3.fromDegrees(114.1180855, 34.7286098, 69.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt006',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity220();
		function addEntity221() {
			var position = Cesium.Cartesian3.fromDegrees(114.1177011, 34.7274989, 69.57);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(160);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity221();
		function addEntity222() {
			var position = Cesium.Cartesian3.fromDegrees(114.1181245, 34.7275042, 69.57);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity222();
		function addEntity223() {
			var position = Cesium.Cartesian3.fromDegrees(114.1178741, 34.7263758, 68.84);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity223();
		function addEntity224() {
			var position = Cesium.Cartesian3.fromDegrees(114.1182695, 34.7264229, 69.2);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(335);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity224();
		function addEntity226() {
			var position = Cesium.Cartesian3.fromDegrees(114.1181167, 34.7252484, 68.46);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt011',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity226();
		function addEntity227() {
			var position = Cesium.Cartesian3.fromDegrees(114.118492, 34.7253, 68.46);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt012',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity227();
		function addEntity228() {
			var position = Cesium.Cartesian3.fromDegrees(114.1183239, 34.7244186, 67.68);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt013',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity228();
		function addEntity230() {
			var position = Cesium.Cartesian3.fromDegrees(114.1186982, 34.7244821, 67.68);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt014',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity230();
		function addEntity231() {
			var position = Cesium.Cartesian3.fromDegrees(114.1186696, 34.7232997, 66.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt015',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity231();
		function addEntity232() {
			var position = Cesium.Cartesian3.fromDegrees(114.1190291, 34.7233927, 66.78);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt016',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity232();
		function addEntity233() {
			var position = Cesium.Cartesian3.fromDegrees(114.1190842, 34.7221944, 66.69);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(140);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt017',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity233();
		function addEntity235() {
			var position = Cesium.Cartesian3.fromDegrees(114.1194395, 34.7223007, 66.72);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(320);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt018',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity235();
		function addEntity236() {
			var position = Cesium.Cartesian3.fromDegrees(114.1194383, 34.721386, 67.51);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt019',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity236();
		function addEntity237() {
			var position = Cesium.Cartesian3.fromDegrees(114.1198081, 34.7214566, 67.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt020',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity237();
		function addEntity238() {
			var position = Cesium.Cartesian3.fromDegrees(114.1198646, 34.7205084, 68.94);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt021',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity238();
		function addEntity239() {
			var position = Cesium.Cartesian3.fromDegrees(114.1202252, 34.7206024, 68.96);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt022',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity239();
		function addEntity240() {
			var position = Cesium.Cartesian3.fromDegrees(114.1204735, 34.7194133, 70.5);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt023',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity240();
		function addEntity241() {
			var position = Cesium.Cartesian3.fromDegrees(114.1208268, 34.7195208, 70.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt024',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity241();
		function addEntity242() {
			var position = Cesium.Cartesian3.fromDegrees(114.1211755, 34.7182727, 71.35);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt025',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity242();
		function addEntity243() {
			var position = Cesium.Cartesian3.fromDegrees(114.1215187, 34.7184001, 71.35);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt026',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity243();
		function addEntity245() {
			var position = Cesium.Cartesian3.fromDegrees(114.1217105, 34.7174366, 71.57);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt027',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity245();
		function addEntity246() {
			var position = Cesium.Cartesian3.fromDegrees(114.122059, 34.7175561, 71.59);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt028',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity246();
		function addEntity247() {
			var position = Cesium.Cartesian3.fromDegrees(114.1224139, 34.7163446, 71.77);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt029',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity247();
		function addEntity248() {
			var position = Cesium.Cartesian3.fromDegrees(114.1227624, 34.7164641, 71.79);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt030',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity248();
		function addEntity249() {
			var position = Cesium.Cartesian3.fromDegrees(114.1230401, 34.7153482, 71.92);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt031',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity249();
		function addEntity250() {
			var position = Cesium.Cartesian3.fromDegrees(114.1233886, 34.7154677, 71.94);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt032',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity250();
		function addEntity251() {
			var position = Cesium.Cartesian3.fromDegrees(114.1236203, 34.7143841, 71.52);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(130);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt033',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity251();
		function addEntity253() {
			var position = Cesium.Cartesian3.fromDegrees(114.1239739, 34.7144898, 71.49);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(310);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt034',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity253();
		function addEntity254() {
			var position = Cesium.Cartesian3.fromDegrees(114.1242353, 34.7132884, 70.12);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt035',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity254();
		function addEntity257() {
			var position = Cesium.Cartesian3.fromDegrees(114.124597, 34.713382, 70.07);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt036',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity257();
		function addEntity258() {
			var position = Cesium.Cartesian3.fromDegrees(114.1246868, 34.7124312, 68.86);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt037',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity258();
		function addEntity259() {
			var position = Cesium.Cartesian3.fromDegrees(114.1250484, 34.7125248, 68.81);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt038',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity259();
		function addEntity260() {
			var position = Cesium.Cartesian3.fromDegrees(114.1251167, 34.7115654, 67.65);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt039',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity260();
		function addEntity261() {
			var position = Cesium.Cartesian3.fromDegrees(114.1254784, 34.7116589, 67.6);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(315);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt040',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity261();
		function addEntity262() {
			var position = Cesium.Cartesian3.fromDegrees(114.1256018, 34.710523, 67.21);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(140);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt041',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity262();
		function addEntity263() {
			var position = Cesium.Cartesian3.fromDegrees(114.125968, 34.7106006, 67.21);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(320);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt042',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity263();
		function addEntity265() {
			var position = Cesium.Cartesian3.fromDegrees(114.1260796, 34.7093927, 67.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(140);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt043',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity265();
		function addEntity266() {
			var position = Cesium.Cartesian3.fromDegrees(114.1264491, 34.709461, 67.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(320);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt044',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity266();
		function addEntity267() {
			var position = Cesium.Cartesian3.fromDegrees(114.1265061, 34.7083034, 68.29);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt045',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity267();
		function addEntity268() {
			var position = Cesium.Cartesian3.fromDegrees(114.1268757, 34.7083589, 68.29);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt046',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity268();
		function addEntity269() {
			var position = Cesium.Cartesian3.fromDegrees(114.1268008, 34.7074746, 69.16);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt047',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity269();
		function addEntity270() {
			var position = Cesium.Cartesian3.fromDegrees(114.1271735, 34.7075281, 69.11);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt048',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity270();
		function addEntity271() {
			var position = Cesium.Cartesian3.fromDegrees(114.1271594, 34.7063742, 71.05);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt049',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity271();
		function addEntity273() {
			var position = Cesium.Cartesian3.fromDegrees(114.1275367, 34.7064183, 71.08);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt050',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity273();
		function addEntity274() {
			var position = Cesium.Cartesian3.fromDegrees(114.1274807, 34.7052448, 72.9);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(145);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt051',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity274();
		function addEntity275() {
			var position = Cesium.Cartesian3.fromDegrees(114.127863, 34.705295, 72.85);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt052',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity275();
		function addEntity276() {
			var position = Cesium.Cartesian3.fromDegrees(114.1276452, 34.7042743, 74.06);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt053',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity276();
		function addEntity277() {
			var position = Cesium.Cartesian3.fromDegrees(114.1281531, 34.7041812, 74.05);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt054',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity277();
		function addEntity278() {
			var position = Cesium.Cartesian3.fromDegrees(114.1280253, 34.7030345, 74.95);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt055',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity278();
		function addEntity279() {
			var position = Cesium.Cartesian3.fromDegrees(114.1284098, 34.703064, 74.94);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(325);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt056',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity279();
		function addEntity280() {
			var position = Cesium.Cartesian3.fromDegrees(114.1281911, 34.7022162, 74.87);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(150);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt057',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity280();
		function addEntity282() {
			var position = Cesium.Cartesian3.fromDegrees(114.1285667, 34.702247, 74.89);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt058',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity282();
		function addEntity284() {
			var position = Cesium.Cartesian3.fromDegrees(114.1284241, 34.7008247, 74.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt059',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity284();
		function addEntity285() {
			var position = Cesium.Cartesian3.fromDegrees(114.1287957, 34.7008573, 74.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(330);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt060',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity285();
		function addEntity286() {
			var position = Cesium.Cartesian3.fromDegrees(114.1285652, 34.6997159, 73.41);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt061',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity286();
		function addEntity287() {
			var position = Cesium.Cartesian3.fromDegrees(114.128987, 34.6997273, 73.37);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(335);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt062',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity287();
		function addEntity288() {
			var position = Cesium.Cartesian3.fromDegrees(114.1286514, 34.6988883, 72.46);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt063',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity288();
		function addEntity289() {
			var position = Cesium.Cartesian3.fromDegrees(114.1290683, 34.6988952, 72.44);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(335);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt064',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity289();
		function addEntity290() {
			var position = Cesium.Cartesian3.fromDegrees(114.1284525, 34.6980889, 69.7);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(135);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt065',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity290();
		function addEntity291() {
			var position = Cesium.Cartesian3.fromDegrees(114.1287317, 34.697784, 70.58);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(155);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt066',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity291();
		function addEntity293() {
			var position = Cesium.Cartesian3.fromDegrees(114.1292043, 34.6977825, 70.56);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(335);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt067',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity293();
		function addEntity294() {
			var position = Cesium.Cartesian3.fromDegrees(114.1296938, 34.6970412, 66.17);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(60);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt068',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity294();
		function addEntity295() {
			var position = Cesium.Cartesian3.fromDegrees(114.1291593, 34.6966608, 69.01);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/gdqssxt/gdqssxt.gltf';
			var heading = Cesium.Math.toRadians(340);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'gdqssxt069',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity295();
		function addEntity229() {
			var position = Cesium.Cartesian3.fromDegrees(114.1183265, 34.7244145, 67.35);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/hmbld/hmbld.gltf';
			var heading = Cesium.Math.toRadians(75);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'hmbld001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity229();
		function addEntity255() {
			var position = Cesium.Cartesian3.fromDegrees(114.1242387, 34.7132848, 69.78);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/hmbld/hmbld.gltf';
			var heading = Cesium.Math.toRadians(65);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'hmbld002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity255();
		function addEntity281() {
			var position = Cesium.Cartesian3.fromDegrees(114.1281933, 34.7022121, 74.53);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/hmbld/hmbld.gltf';
			var heading = Cesium.Math.toRadians(80);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'hmbld003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity281();
		function addEntity29() {
			var position = Cesium.Cartesian3.fromDegrees(114.120304, 34.830007, 75.16);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb.gltf';
			var heading = Cesium.Math.toRadians(176);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb001',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity29();
		function addEntity62() {
			var position = Cesium.Cartesian3.fromDegrees(114.1277054, 34.6856631, 71.38);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb.gltf';
			var heading = Cesium.Math.toRadians(191);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb002',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity62();
		function addEntity65() {
			var position = Cesium.Cartesian3.fromDegrees(114.1246115, 34.7127652, 71.85);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb.gltf';
			var heading = Cesium.Math.toRadians(336);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb003',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity65();
		function addEntity175() {
			var position = Cesium.Cartesian3.fromDegrees(114.0410101, 34.4698093, 91.82);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb.gltf';
			var heading = Cesium.Math.toRadians(346);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb004',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity175();
		function addEntity196() {
			var position = Cesium.Cartesian3.fromDegrees(114.0564171, 34.4371595, 76.51);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(149);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb005',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity196();
		function addEntity296() {
			var position = Cesium.Cartesian3.fromDegrees(114.1207006, 34.2557286, 62.51);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(329);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb006',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity296();
		function addEntity303() {
			var position = Cesium.Cartesian3.fromDegrees(114.1815703, 34.2224907, 56.65);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(124);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb007',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity303();
		function addEntity372() {
			var position = Cesium.Cartesian3.fromDegrees(114.3213117, 33.9874326, 48.71);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(352);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb008',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity372();
		function addEntity376() {
			var position = Cesium.Cartesian3.fromDegrees(114.347813, 33.949901, 49.19);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(131);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb009',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity376();
		function addEntity447() {
			var position = Cesium.Cartesian3.fromDegrees(114.5414631, 33.6791145, 45.75);
			var url = 'http://127.0.0.1:8888/jxgs_3dtiles/dth/mjqbb/mjqbb01.gltf';
			var heading = Cesium.Math.toRadians(319);
			var pitch = 0;
			var roll = 0;
			var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
			var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
			var entity = viewer.entities.add({
				name: 'mjqbb010',
				position: position,
				description: 'html5',
				orientation: orientation,
				model: { uri: url, minimumPixelSize: 128, maximumScale: 1 },
			});
			dthEntities.add(entity);
		}
		addEntity447();
	}
	function removeDth() {
		var collection = dthEntities;
		var entities = collection.values;
		collection.suspendEvents();
		for (var i = 0; i < entities.length; i++) {
			var entity = entities[i];
			viewer.entities.remove(entity);
		}
		collection.resumeEvents();
		dthEntities.removeAll();
	}
	return {
		loadDth: loadDth,
		removeDth: removeDth,
		dthEntities: dthEntities,
	};
});
