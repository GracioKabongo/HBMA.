<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["primeiro_nome"] . " " . $_POST["ultimo_nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];
    
    $to = "info@hbma.co.mz";
    $subject = "Contato do site";
    $body = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar.";
    }
}
?>
