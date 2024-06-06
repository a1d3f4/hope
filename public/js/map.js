
	mapboxgl.accessToken = maptoken
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates , // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
console.log(coordinates)
    const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);