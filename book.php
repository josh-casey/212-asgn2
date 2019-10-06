<?php
$scriptList = array('js/jquery-3.4.1.min.js', 'js/jquery-ui-1.12.1/jquery-ui.js', 'js/bookings.js', 'js/validate.js');
include('private/header.php')
/* <link rel="stylesheet" type="text/css" href="js/jquery-ui-1.12.1/jquery-ui.css">*/
?>

<main>
    <div id="saved"></div>
    <section id="booking">
        <h2>Booking...</h2>
        <form>
            <fieldset>
                <legend>Campsite bookings</legend>
                <label for="site">Campsite</label>
                <select id="site"></select><br><br>
                <label for="inDate">From</label>
                <input type="text" id="inDate">
                <label for="outDate">To</label>
                <input type="text" id="outDate"><br><br>
                <label for="guestName">Name</label>
                <input type="text" id="guestName">
                <label for="contact">Phone</label>
                <input type="text" id="contact"><br><br>
                <input id="book" type="button" value="Book">
            </fieldset>
        </form>
        <div id="errors"></div>
    </section>
</main>
<?php
include('private/footer.php');
?>