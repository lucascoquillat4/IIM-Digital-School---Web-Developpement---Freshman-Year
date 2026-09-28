<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
</head>
<body>
    <h2>Créer un compte</h2>

    <form method="POST" action="traitement_inscription.php">
        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="mot_de_passe">Mot de passe :</label><br>
        <input type="password" id="mot_de_passe" name="mot_de_passe" required><br><br>

        <button type="submit">S'inscrire</button>
    </form>

    <p>Déjà inscrit ? <a href="login.php">Connectez-vous ici</a>.</p>
</body>
</html>
