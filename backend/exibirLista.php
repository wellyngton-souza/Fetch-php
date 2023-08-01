<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    // Dados de Load.
    $data = [
        ['name' => 'Mexerica'],
        ['name' => 'Banana'],
        ['name' => 'Goiaba'],
    ];

    // Converte o array em formato JSON e imprime na saída.
    echo json_encode($data);
?>