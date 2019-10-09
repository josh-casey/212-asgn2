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
                <th>Admin</th>
            </tr>
        </table>
    </section>
    <section id="modifySite">
        <h3>Modify Campsite</h3>
        <form method="POST" action="private/modifySite.php">
            <select id="modifyOpt" name="modifyOpt">
                <option value="create">Create site</option>
                <option value="edit">Edit site</option>
                <option value="delete">Delete site</option>
                <input type="number" name="editNum" id="editNum" placeholder="Enter existing site number">
                <input type="number" name="newSite" id="newSite" placeholder="Enter new site number (if editing or adding)">
                <select id="newType" name="newType">
                    <option value="tent">Tent</option>
                    <option value="cabin">Cabin</option>
                    <option value="van">Van</option>
                </select>
                <input type="text" name="price" id="price" placeholder="Enter price per night">
                <input type="text" name="description" id="description" placeholder="Enter description">
                <button id="submitButton" type="submit">Submit</button>
            </select>
        </form>
    </section>
</main>
<?php
include('private/footer.php');
?>