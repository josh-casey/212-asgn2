<?php
$scriptList = array('js/jquery-3.4.1.min.js', 'js/campsites.js');
include('private/header.php')
?>
<main>
    <h2>Campsites...</h2>

    <section id="campsite">
        <form>
            <label for="dropdown">Select a camp type</label>
            <select id="dropdown">
                <option value="tent">Tent</option>
                <option value="caravan">Caravan</option>
                <option value="cabin">Cabin</option>
            </select></form>
        <div id="campContainer"></div>
    </section>
</main>
<?php
include('private/footer.php');
?>

