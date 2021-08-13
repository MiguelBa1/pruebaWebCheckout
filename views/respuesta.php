<?php 
$requestId = $_SESSION["transactionID"];
$respuesta = ControladorRespuesta::ctrValidaEstadoPago($requestId);
?>
<div class="container">
  <h1>N° PETICIÓN : <?= $requestId ?></h1>
  <div class="<?= $respuesta['class'] ?>" >
     <strong>Informacion de la operación: </strong> <?= $respuesta['result']?>
  </div>
  <button id="btnpagar"><a href="venta">Volver</a></button>
</div>



    
