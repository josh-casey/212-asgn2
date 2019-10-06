var Campsites = (function() {
    "use strict";
    var pub;
    pub = {};

    function parseSite(data, target) {
        var tentHtml = '', caravanHtml = '', cabinHtml = '';
        var type = $('#dropdown').val();
        var site = data.campSites.site;

        for (var i = 0; i < site.length; i++) {
            if (site[i].siteType === 'Tent') {
                tentHtml += '<div id="campDiv"><h3>Tent: ' + site[i].number + '</h3>';
                tentHtml += '<img src="img/tent.jpg" alt="tent"></br>';
                tentHtml += '<p>Descrption: ' + site[i].description + '</p><br>';
                tentHtml += '<p>Price (per night): ' + site[i].pricePerNight + '</p></div>';
            } else if (site[i].siteType === 'Van') {
                caravanHtml += '<div id="campDiv"><h3>Van: ' + site[i].number + '</h3>';
                caravanHtml += '<img src="img/camperVan.jpg" alt="tent"></br>';
                caravanHtml += '<h4>Number: ' + site[i].number + '</h4>';
                caravanHtml += '<p>Descrption: ' + site[i].description + '</p><br>';
                caravanHtml += '<p>Price (per night): ' + site[i].pricePerNight + '</p></div>';
            } else {
                cabinHtml += '<div id="campDiv"><h3>Cabin: ' + site[i].number + '</h3>';
                cabinHtml += '<img src="img/cabin.jpg" alt="tent"></br>';
                cabinHtml += '<h4>Number: ' + site[i].number + '</h4>';
                cabinHtml += '<p>Descrption: ' + site[i].description + '</p><br>';
                cabinHtml += '<p>Price (per night): ' + site[i].pricePerNight + '</p></div>';
            }
        }

        if(type === 'tent') {
            $(target).html(tentHtml);
        } else if (type === 'caravan') {
            $(target).html(caravanHtml);
        } else {
            $(target).html(cabinHtml);
        }
    }
    function showSite() {
        var target = $('#campContainer');
        $.getJSON("json/campsites.json", function(data) {
            parseSite(data,target);
        });
    }

    pub.setup = function () {
        showSite();
        $('select').on('change', showSite);


    };

    return pub;
}());

$(document).ready(Campsites.setup);
