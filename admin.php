<?php
$scriptList = array('js/jquery-3.4.1.min.js', 'js/admin.js');
include('private/header.php')
?>
<main>
    <h2>Administration</h2>
    <section id="currentBookings">
        <h3>Bookings</h3>
        <table id="bookingTable">
            <tr>
                <th>Site</th>
                <th>Name</th>
                <th>Check In</th>
                <th>Check Out</th>
            </tr>
        </table>
    </section>
</main>
<?php
include('private/footer.php');
?>