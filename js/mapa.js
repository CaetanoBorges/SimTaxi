


function localizacao(mapa) {
    
    if (navigator.geolocation) {
        navigator.geolocation.
        getCurrentPosition(function(position) {
            console.log(position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var devCenter = new google.maps.LatLng(lat, lng);
            mapa.setCenter(devCenter);
            mapa.setZoom(15);
            var marker = new google.maps.Marker({
                position: devCenter,
                map: mapa,
            });
        });
    }
}
function initMap(){
            // The location of Uluru
            const uluru = { lat: 55.0302, lng: 29.55 };
            const ulur = { lat: 42.3601, lng: 71.0589 };
            // The map, centered at Uluru
            const map = new google.maps.Map(
                document.getElementById("mapa-global"),
                {
                zoom: 4,
                center: uluru,
                }
            );

            function addMarker(coords){
                const marker = new google.maps.Marker({
                    position: coords,
                    map: map
                });
            }

            window.add=addMarker;
            // The marker, positioned at Uluru
            const mark = new google.maps.Marker({
                position: uluru,
                map: map,
            });
        }