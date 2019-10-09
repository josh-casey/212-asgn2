<?php
/* modifySite.php
 * Allows for admins to add and modify camp sites.
 * author: Josh Casey
 * last edit: 9/10/2019
 */

$option = $_POST['modifyOpt'];
$siteNum = $_POST['newSite'];
$editNum = $_POST['editNum'];
$siteType = $_POST['newType'];
$price = $_POST['price'];
$desc = $_POST['description'];

$jsonFile = 'campsites.json';
$jsonInput = file_get_contents($jsonFile);
$json = json_decode($jsonInput, true);

if ($option == "delete") {
    $i = 0;
    foreach($json['campSites']['site'] as $arr) {
        if ($arr['number'] == $siteNum) {
            unset($json['campSites']['site'][$i]);
        }
        $i++;
    }
} else if ($option == 'edit') {
    $i = 0;
    foreach ($json['campSites']['site'] as $arr) {
        if ($arr['number'] == $siteNum) {
            $json['campSites']['site'][$i]['number'] = $editNum;
            $json['campSites']['site'][$i]['siteType'] = $siteType;
            $json['campSites']['site'][$i]['pricePerNight'] = $price;
            $json['campSites']['site'][$i]['description'] = $desc;
        }
    }
} else {
    $jsondata = array('number'=>$siteNum, 'siteType'=>$siteType, 'description'=>$desc, 'pricePerNight'=>$price);
    array_push($json['campSites']['site'], $jsondata);
}

$json_output = json_encode($json, JSON_PRETTY_PRINT)."\n";
file_put_contents($jsonFile, $json_output);

header("Location: ../admin.php");