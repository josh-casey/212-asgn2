<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Casey's Campground</title>
    <?php
    if (isset($scriptList) && is_array($scriptList)){
        foreach ($scriptList as $script){
            echo "<script src = '$script'></script>";
        }
    }
    ?>
    <link rel="stylesheet" href="js/leaflet/leaflet.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<header>
    <h1>Casey's Campground</h1>
    <nav>
        <ul>
            <?php
            $currentPage = basename($_SERVER['PHP_SELF']);
            if ($currentPage === 'index.php') {
               echo "<li> Home";
            } else {
                echo "<li> <a href='index.php'>Home</a>";
            }

            if ($currentPage === 'campsites.php') {
                echo "<li> Campsites";
            } else {
                echo "<li> <a href='campsites.php'>Campsites</a>";
            }

            if ($currentPage === 'book.php') {
                echo "<li> Book";
            } else {
                echo "<li> <a href='book.php'>Book</a>";
            }
            ?>
        </ul>
    </nav>
</header>
