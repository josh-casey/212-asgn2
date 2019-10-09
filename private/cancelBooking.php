<?php

$jsonFile = 'bookings.json';
$jsonInput = file_get_contents($jsonFile);
$json = json_decode($jsonInput,true);

$bookingInfo = json_decode(file_get_contents("php://input"));

$i = 0;
foreach($json['bookings']['booking'] as $arr) {
    if ($arr['site'] == $bookingInfo[0] && $arr['name'] == $bookingInfo[1]) {
        unset($json['bookings']['booking'][$i]);
        //Ensure array is indexed properly
        //$json['bookings']['booking'] = array_values($json['bookings']['booking']);

    }

    $i++;
}

$json_output = json_encode($json, JSON_PRETTY_PRINT)."\n";
file_put_contents($jsonFile, $json_output);