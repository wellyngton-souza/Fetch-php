<?php
	// @47

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

	$servername = "localhost";
	$username = "**************";
	$password = "**************";
	$dbname = "id21101072_listaprodutos";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Falha na conexão: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM lista_produtos";

	$result = $conn->query($sql);

	if ($result->num_rows) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
	    $listaProdutos[] = $row;
	}
	
	echo json_encode($listaProdutos);
	} else {
	    echo "0 resultados";
	}
	$conn->close();
?>