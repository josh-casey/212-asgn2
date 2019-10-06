var validate = (function() {
    "use strict";
    var pub = {};

    function checkDigits(textValue) {
        var pattern = /^[0-9]+$/;
        return pattern.test(textValue);
    }

    function checkDates(inDate,outDate,messages) {
        if (inDate === "" || outDate === "") {
            messages.push("<p>Date/s can not be left empty</p>");
        } else if (inDate > outDate) {
            messages.push("<p>Check-in date must be before check-out</p>");
        } else if (inDate - outDate === 0) {
            messages.push("<p>You can not check-in and out on the same day</p>");
        }
    }

    function checkName(name, messages) {
        if (name === "") {
            messages.push("<p>Name can not be empty</p>");
        }
    }

    function checkContact(contact, messages) {
        if (contact === "") {
            messages.push("<p>Please enter a valid phone number</p>");
        } else if (checkDigits(contact) === false) {
            messages.push("<p>Please enter a valid phone number</p>");
        }


    }
    pub.checkValid = function(inDate, outDate, name, contact) {
        var messages = [];
        $("#errors").empty();

        checkDates(inDate, outDate, messages);
        checkName(name,messages);
        checkContact(contact,messages);

        return messages;
    };

    return pub;
}());