<?php
echo "estas dentro";
//DESHABILITAR MOSTRAR ERRORES
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(-1);

require 'vendor/autoload.php';
//IMPORTAR LIBRERIRAS DE Rivescript
use \Axiom\Rivescript\Rivescript;
/*
 * VERIFICACION DEL WEBHOOK
*/
//TOCKEN 
$token = 'prueba';
//PALABRA
$palabra = $_GET['hub_challenge'];
//TOQUEN DE VERIFICACION
$tokenVerificacion = $_GET['hub_verify_token'];

if ($token === $tokenVerificacion) {
    echo $palabra;
    exit;
}
/*
 * RECEPCION DE MENSAJES
 */
//LEER
$respuesta = file_get_contents("php://input");
//JSON -> PHP
$respuesta = json_decode($respuesta, true);
//MENSAJE DEL ARRAY
$mensaje=$respuesta['entry'][0]['changes'][0]['value']['messages'][0]['text']['body'];
//TELEFONO DEL ARRAY
$telefonoCliente=$respuesta['entry'][0]['changes'][0]['value']['messages'][0]['from'];
//ID DE WHATSAPP DEL ARRAY
$id=$respuesta['entry'][0]['changes'][0]['value']['messages'][0]['id'];
//TIEMPO DE WHATSAPP DEL ARRAY
$timestamp=$respuesta['entry'][0]['changes'][0]['value']['messages'][0]['timestamp'];

if($mensaje!=null){
    //INICIALIZAR RIVESCRIPT Y CARGAR CONVERSACION
    $rivescript = new Rivescript();
    $rivescript->load('incidentes.rive');
    //OBTENER RESPUESTA
    $respuesta= $rivescript->reply($mensaje);
    //LLAMAR A FUNCION DE ENVIAR RESPUESTA
    require_once './envia.php';
    //ENVIAR RESPUESTA VIA WHATSAPP
    enviar($mensaje,$respuesta,$id,$timestamp,$telefonoCliente);
}