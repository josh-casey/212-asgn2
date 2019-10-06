/* global L */

var leafletMap = (function () {
    "use strict";
    var pub = {};
    var map;
    var updateData, poi;
    var triangle = L.polygon([
        [-45.911954, 170.48982],
        [-45.910456, 170.494734],
        [-45.910859, 170.495796]]);

    function onEachFeature(feature, layer) {
        var popup = "<p>" + feature.properties.name + "</p>";
        if (feature.properties["marker-symbol"] === "triangle") {
            triangle.addTo(map);
        }

        layer.bindPopup(popup);
    }

    function filterCheck(feature) {
        var attractions = feature.properties.type === "landmark" && $("#attractions")[0].checked;
        var restaurants = feature.properties.type === "restaurant" && $("#restaurants")[0].checked;
        var camp = feature.properties.type === "campsite";

        return restaurants || attractions || camp;
    }

    function onMapClick(e) {
    }

    function parseMap(data) {
        poi = L.geoJSON(data, {
            onEachFeature: onEachFeature,
            filter: filterCheck,
        });
        poi.addTo(map);
    }

    function updateMarkers() {
        poi.clearLayers();
        triangle.remove();
        poi.addData(updateData);
    }

    pub.setup = function() {
        map = L.map('map').setView([-45.90540437585189, 170.5153065919876], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { maxZoom: 18,
                attribution: 'Map data &copy; ' +
                    '<a href="http://www.openstreetmap.org/copyright">' +
                    'OpenStreetMap contributors</a> CC-BY-SA'
            }).addTo(map);
        $.ajax({
            type: "GET",
            url: 'json/POI.geojson',
            dataType: 'json',
            success: function(data) {
                parseMap(data);
                updateData = data;
            }
        });

        $("input").change(updateMarkers);
        map.on('click', onMapClick);
    };
    return pub;
}());

$(document).ready(leafletMap.setup);
