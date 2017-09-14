function initMap() {
       var uluru = {lat: 47.6366011, lng: -122.3423816};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 15,
         center: uluru
       });
       var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });
     }
