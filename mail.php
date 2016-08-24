<!DOCTYPE html>
<html lang="en" class="no-js">
<?php
if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["comment"]) && $_POST["name"] !== "" && $_POST["email"] !== "" && $_POST["comment"] !== "")
{
mail("jonathan.platteau@yahoo.fr", "[JOPL.ME] ".$_POST["email"]." ".$_POST["name"], $_POST["comment"], "From: ".$_POST["email"]." ".$_POST["name"]);
header('Location: index.html');
}
?>
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GET Jonathan Platteau</title>
<script type='text/javascript'>
setTimeout('window.location.replace("index.html")', 4000);
</script>
</head>

<body>
Echec de l'envoi du message ! Redirection dans quelques secondes... <br/>
Si la redirection ne s'effectue pas, <a href="index.html">cliquez ici</a>
</body>
</html>
