/* Jules Carboni, May 2021. This is my useful JavaScript module for the assignemnt. */

// Initialize and add the map
function initMap() {

    // The locations of the service
    const melb = { lat: -37.81288394038723, lng: 145.2283731816775 };
    const syd = { lat: -33.86040563000739, lng: 151.21105035006914 };
    const bris = { lat: -27.38749962578889, lng: 153.12682286111297 };

    const middle = { lat: -32.060, lng: 145.172 };

    // The map, centered at the midpoint of all the locations
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4.5,
      center: middle,
    });

    // The markers, positioned at the locations
    const marker_melb = new google.maps.Marker({
      position: melb,
      map: map,
    });
    const marker_syd = new google.maps.Marker({
      position: syd,
      map: map,
    });
    const marker_bris = new google.maps.Marker({
      position: bris,
      map: map,
    });

  }