function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 52, lng: 20 }
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);

    });


}

// Funkcja podmienia pobiera ikony z pola Select
function podmiana() {
    image = document.formularz.ikona.value
}



function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);

            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                icon: image

            });
        } else {
            alert('Nic nie wpisałeś! : Musisz wpisać nazwę. np. Lublin');
        }
    });
}