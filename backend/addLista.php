<?php
    header('Access-Control-Allow-Origin: *'); // Permisão Url
    header('Access-Control-Allow-Methods: *'); // Permisão metodo
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $newItem = json_decode(file_get_contents('php://input'), true); // Recebe os dados

        echo json_encode($newItem); // Responde com o novo item em formato JSON.
    }
?>