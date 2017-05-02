var map;

function  initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.918861, lng: 18.423300},
          zoom: 9
        });
}
