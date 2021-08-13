<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
  <link rel="stylesheet" <?= 'href="styles/'.$_GET["ruta"].'.css"'?>>

</head>
<body>
<?php 
if (isset($_SESSION["iniciarSesion"]) && $_SESSION["iniciarSesion"] == "ok") {
  if(isset($_GET["ruta"])){
    if($_GET["ruta"] == "login" ||
      $_GET["ruta"] == "respuesta" ||
      $_GET["ruta"] == "venta"){
      include "Vistas/".$_GET["ruta"].".php"; 
    }
  }
} else {
  include "Vistas/login.php";
}
?>
</body>
</html>
