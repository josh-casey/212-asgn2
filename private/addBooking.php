<?php

$name = $_POST('name');
$site = $_POST('site');
$checkIn = array('day'=>$_POST['checkin-day'],'month'=>$_POST['checkin-month'],'year'=>$_POST['checkin-year']);
$checkOut = array('day'=>$_POST['checkout-day'],'month'=>$_POST['checkout-month'],'year'=>$_POST['checkout-year']);
$jsonData = array('number'=>$site, 'name'=>$name, 'checkin'=>$checkIn, 'checkout'=>$checkOut);

$jsonFile = 'bookings.json';
$jsonInput = file_get_contents($jsonFile);
$json = json_decode($jsonInput, true);
array_push($json['bookings']['booking'],$jsonData);
$json_output = json_encode($json, JSON_PRETTY_PRINT)."\n";
file_put_contents($jsonFile, $json_output);

header("Location: ./book.php");