<?php
$url = 'https://scholar.google.com/scholar?q=' . $_GET['q'];
$data = file_get_contents($url);
header('Content-Type: text/html');
echo $data;
?>