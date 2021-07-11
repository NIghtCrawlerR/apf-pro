function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.446492, lng:30.443759 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    mapId: 'a6eba0c85ba4b665'
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}