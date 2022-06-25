<?php
require_once __DIR__ . '/database.php';

header('Content-Type: application/json');

$response = $albums;

if(is_numeric($_GET['index'])) {
    $response = $albums[$_GET['index']];
}

echo json_encode($response);
