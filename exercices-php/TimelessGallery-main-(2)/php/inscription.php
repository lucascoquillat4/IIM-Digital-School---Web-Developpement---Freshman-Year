<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - Timeless Gallery</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <!-- Début Header -->
    <header>
        <h1 class="animated-title">Timeless Gallery</h1>
    </header>
    <nav class="navbar">
        <div class="nav-content">
            <a href="../index.php">Home</a>
            <a href="../index.php#gallery">Gallerie</a>
            <a href="../index.php#contact">Contact</a>
            <a href="#" id="accountBtn">Compte</a>
        </div>
    </nav>
    <!-- Fin Header -->

    <section class="register-section">
        <div class="form-container">
            <h2 class="slide-in-right">Inscription</h2>
            <form class="register-form" method="POST" action="traitement_inscription.php">
                <div class="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="mot_de_passe">Mot de passe :</label>
                    <input type="password" id="mot_de_passe" name="mot_de_passe" required>
                </div>

                <div class="form-group">
                    <label for="confirmer_mdp">Confirmer le mot de passe :</label>
                    <input type="password" id="confirmer_mdp" name="confirmer_mdp" required>
                </div>

                <button type="submit" class="cta-button">S'inscrire</button>
            </form>
            <p class="login-link">Déjà inscrit ? <a href="login.php">Connectez-vous ici</a></p>
        </div>
    </section>

    <!-- Début Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2025 - Tous droits réservés | Lucas Coquillat</p>
        </div>
    </footer>
    <!-- Fin Footer -->

    <script src="../js/script.js"></script>
</body>
</html>
