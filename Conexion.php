<!DOCTYPE html>
<html>
<head>
	<title>Conexion </title>
</head>
<body>


<?php

function conectarse(){
	$cbd = new mysqli("localhost","root","","entregafrontend") or die (" Algo  ah salido  mal con la conexion ");
	return $cbd;
}

$lf=conectarse();


?>
</body>
</html>