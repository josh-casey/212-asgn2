/* global validate */

var Booking = (function () {
    "use strict";
    var pub = {};
    var bookings, booking;

    function generateList(data) {
        var listItem = "";
        var site = data.campSites.site;

        for (var i = 0; i < site.length; i++) {
            listItem += "<option value =" + site[i].number+ ">";
            listItem += site[i].siteType + " #" + site[i].number;
            listItem += " Price: $" + site[i].pricePerNight + " per night";
        }
        $("#site").append(listItem);
    }
    function siteList() {
        var target = $("#site");
        $.getJSON('json/campsites.json', function(data) {
            generateList(data);
        }).fail(function() {
            $(target).html("We are fully booked!");
        });
    }

    function bookingSubmit() {
        var html = "";
        var savedBookings = $("#saved");
        savedBookings.hide();
        bookings = window.localStorage.getItem("booking");
        if (bookings) {
            savedBookings.show();
            booking = JSON.parse(bookings);
            booking.forEach(function(i) {
                html = "<p><strong>Pending</strong> booking for: " + i.name + "</p>";
                html += "<p>From: " + i.in + " to: " + i.out + "</p>";
                html += "<p>Site number: " + i.site + "</p><br>";
                savedBookings.append(html);
            });
        }
    }
    function bookSite() {
        var inDate = $("#inDate");
        var outDate = $("#outDate");
        inDate.datepicker();
        outDate.datepicker();

        $("#book").click(function () {
            booking = {};
            booking.name = $("#guestName").val();
            booking.site = $("#site").val();
            booking.in = inDate.val();
            booking.out = outDate.val();
            booking.contact = $("#contact").val();

            var checkValid = validate.checkValid(inDate.datepicker("getDate"), outDate.datepicker("getDate"), booking.name, booking.contact);

            if (checkValid.length > 0) {
                checkValid.forEach(function(i) {
                    $("#errors").append(i + "<br>");
                });
            } else {
                bookings = window.localStorage.getItem("booking");
                if (bookings) {
                    bookings = JSON.parse(bookings);
                } else {
                    bookings = [];
                }

                bookings.push(booking);
                window.localStorage.setItem("booking", JSON.stringify(bookings));
                bookingSubmit();
                location.reload();
            }
        });
    }

    pub.setup = function() {
        siteList();
        bookSite();
        bookingSubmit();
    };

    return pub;
}());

$(document).ready(Booking.setup);
