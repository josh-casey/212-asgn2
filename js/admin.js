var admin = (function() {
    "use strict";

    var pub = {};

    function displayBookings(data, target) {
        var booking = data.bookings.booking;
        booking.forEach(function(i) {
            var siteNum = i.number;
            var name = i.name;
            var inDate = i.checkin.day + "/" + i.checkin.month + "/" +i.checkin.year;
            var outDate = i.checkout.day + "/" + i.checkout.month + "/" +i.checkout.year;

            var rowHTML = "<tr><td>" + siteNum + "</td>";
            rowHTML += "<td>" + name + "</td>";
            rowHTML += "<td>" + inDate + "</td>";
            rowHTML += "<td>" + outDate + "</td></tr>";

            target.append(rowHTML);

        });
    }

    function showBookings() {
        var target = $("#bookingTable");
        $.ajax({
            type: "GET",
            url: 'json/bookings.json',
            datatype: 'json',
            cache: false,
            success: function (data) {
                $.each(data, function() {
                    displayBookings(data, target);
                });
            },
            error: function () {
                $(target).html("No bookings found.");
            }
        });
    }
    pub.setup = function() {
        showBookings();
    };
    return pub;
}());

$(document).ready(admin.setup);
