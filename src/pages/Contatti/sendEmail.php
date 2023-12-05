<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Leggi i dati dal corpo della richiesta
$data = json_decode(file_get_contents("php://input"));

// Configura i dati dell'email
$to = 'destinatario@example.com'; // Inserisci l'indirizzo email del destinatario
$subject = 'Nuovo Messaggio dal Form Contatti';
$message = "Nome: $data->name\nEmail: $data->email\nMessaggio: $data->message";
$headers = 'From: ' . $data->email;

// Invia l'email
$mailSent = mail($to, $subject, $message, $headers);

// Restituisci la risposta in formato JSON
if ($mailSent) {
    http_response_code(200);
    echo json_encode(array('success' => true, 'message' => 'Messaggio inviato con successo'));
} else {
    http_response_code(500);
    echo json_encode(array('success' => false, 'message' => 'Errore durante l\'invio del messaggio'));
}
?>
