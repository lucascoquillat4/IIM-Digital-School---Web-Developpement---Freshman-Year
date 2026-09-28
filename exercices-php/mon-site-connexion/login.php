<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>
<body>
    <h2>Connexion</h2>
    <form method="POST" action="traitement_login.php">
        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="mot_de_passe">Mot de passe :</label><br>
        <input type="password" id="mot_de_passe" name="mot_de_passe" required><br><br>

        <button type="submit">Se connecter</button>
    </form>

    <p>Pas encore inscrit ?<a href="inscription.php">Inscrit-toi ici</a>.</p>
</body>
</html>
