<?php
$scriptList = array('js/jquery-3.4.1.min.js', 'js/leaflet/leaflet.js', 'js/map.js');
include('private/header.php')
?>
    <main>
        <h2>Welcome...</h2>
        <p>Planning your holiday? Casey's campground offers a wide range of affordable accomodation
            to suit the needs of everyone, see below a map of our prime location and the surrounding attractions!</p><br>
        <h3>Map</h3>
        <figure id="map"></figure>
        <label for="attractions">Attractions</label>
        <input type="checkbox" id="attractions" checked>
        <label for="restaurants">Restaurants</label>
        <input type="checkbox" id="restaurants" checked>
    </main>

<?php
include('private/footer.php');
?>