<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db-config.php';

$data = json_decode(file_get_contents("php://input"));
$table = $data->table;

try {
$db_conn = mysqli_connect($host,$user,$password,$database);	
$allData = mysqli_query($db_conn, "SELECT * FROM `$table`");
$all_data = mysqli_fetch_all($allData, MYSQLI_ASSOC);	
echo json_encode(["all_data" => $all_data]);	
} catch(mysqli_sql_exception $e) {
echo json_encode(["error" => $e]);	
}