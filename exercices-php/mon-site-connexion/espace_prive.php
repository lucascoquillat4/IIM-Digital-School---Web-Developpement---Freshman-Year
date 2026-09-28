<?php
session_start();

// Vérification : connecté ?
if (!isset($_SESSION['utilisateur_id'])) {
    header('Location: login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Espace Privé</title>
</head>
<body>
    <h1>Bienvenue <?php echo htmlspecialchars($_SESSION['email']); ?> !</h1>
    <p><a href="logout.php">Se déconnecter</a></p>
</body>
</html>
