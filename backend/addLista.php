<?php
	// @47

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

	$sql = "INSERT INTO lista_produtos (produto) VALUES ('" . $_POST['produto'] . "');";

	if (mysqli_query($conn, $sql)) {
		$referer = $_SERVER['HTTP_REFERER'];
        header("Location: $referer");
	} else {
		echo 'Error: insira os dados novamente';
	}
	$conn->close();
?>