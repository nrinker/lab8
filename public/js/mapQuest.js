function initMap() {
	L.mapquest.key = 'd2DC97KuPej3UGPi6frh4U0R6xOTNHaY';
	var map = L.mapquest.map('map', {
		center: [32.878736528454965, -117.23587527292489],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.878736528454965, -117.23587527292489]).addTo(map);
}