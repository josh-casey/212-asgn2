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

            var rowHTML = "<tr><td id='site'>" + siteNum + "</td>";
            rowHTML += "<td id='name'>" + name + "</td>";
            rowHTML += "<td id='indate'>" + inDate + "</td>";
            rowHTML += "<td id='outdate'>" + outDate + "</td>";
            rowHTML += "<td><button id='cancel'>Cancel Booking</button></td></tr>";
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

    function cancelBooking() {
        $("#cancel").on("click", function() {
            var siteNum = $(this).parent.find('#site').val();
            var name = $(this).parent.find('#name').val();
            var indate = $(this).parent.find('#indate').val().split('/').pop();
            var booking = JSON.stringify([siteNum, name, indate]);
            $.ajax({
                url:'./private/addBooking.php',
                type:'POST',
                data: booking,
                success:function(data) {
                    alert(data);
                }

            });

        });
    }
    pub.setup = function() {
        showBookings();
        cancelBooking();
    };
    return pub;
}());

$(document).ready(admin.setup);
