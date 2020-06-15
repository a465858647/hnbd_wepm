define(['Cesium', 'jquery'], function (Cesium, $) {
	$('#DISTtool').on('click', function () {});
});
function measureDIST() {


	var redLine = viewer.entities.add({
		polyline: {
			// This callback updates positions each frame.
			positions: new Cesium.CallbackProperty(function (time, result) {
				endLongitude = startLongitude + 0.001 * Cesium.JulianDate.secondsDifference(time, startTime);
				return Cesium.Cartesian3.fromDegreesArray(
					[startLongitude, startLatitude, endLongitude, startLatitude],
					Cesium.Ellipsoid.WGS84,
					result
				);
			}, isConstant),
			width: 5,
			material: Cesium.Color.RED,
		},
	});

	var startCartographic = Cesium.Cartographic.fromDegrees(startLongitude, startLatitude);

	// use scratch object to avoid new allocations per frame.
	var endCartographic = new Cesium.Cartographic();
	var scratch = new Cesium.Cartographic();
	var geodesic = new Cesium.EllipsoidGeodesic();

	// Calculate the length of the line
	function getLength(time, result) {
		// Get the end position from the polyLine's callback.
		var endPoint = redLine.polyline.positions.getValue(time, result)[1];
		endCartographic = Cesium.Cartographic.fromCartesian(endPoint);

		geodesic.setEndPoints(startCartographic, endCartographic);
		var lengthInMeters = Math.round(geodesic.surfaceDistance);
		return (lengthInMeters / 1000).toFixed(1) + ' km';
	}

	function getMidpoint(time, result) {
		// Get the end position from the polyLine's callback.
		var endPoint = redLine.polyline.positions.getValue(time, result)[1];
		endCartographic = Cesium.Cartographic.fromCartesian(endPoint);

		geodesic.setEndPoints(startCartographic, endCartographic);
		var midpointCartographic = geodesic.interpolateUsingFraction(0.5, scratch);
		return Cesium.Cartesian3.fromRadians(midpointCartographic.longitude, midpointCartographic.latitude);
	}

	// Label the polyline with calculated length.
	var label = viewer.entities.add({
		position: new Cesium.CallbackProperty(getMidpoint, isConstant),
		label: {
			// This callback updates the length to print each frame.
			text: new Cesium.CallbackProperty(getLength, isConstant),
			font: '20px sans-serif',
			pixelOffset: new Cesium.Cartesian2(0.0, 20),
		},
	});
	viewer.trackedEntity = label;
}
