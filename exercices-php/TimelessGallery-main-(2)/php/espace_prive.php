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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Venez redécouvrir les oeuvres d'Arts les plus célèbres en format numérique, sans rien payer! "><!--meta description -->
    <title>Timeless Gallery</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"> <!--swiper.js -->
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
            <a href="#inventory">Inventaire</a>
            <a href="#" id="accountBtn">Mon Compte</a>
            <button id="darkModeToggle" class="dark-mode-btn">
                <span class="icon">☀️</span>
                <span class="text">clair</span>
            </button>
        </div>
    </nav>
    <!-- Fin Header -->

<!-- Début About -->
<section class="about">
        <h2 class="slide-in-right">Découvrez l'Art Sans Limite !</h2>
        <p>Timeless Gallery vous propose une sélection d'œuvres intemporelles, allant de la peinture classique à l'art contemporain.</p>
        <a href="#gallery" class="cta-button">Explorer la Galerie</a>
    </section>
<!-- Fin About -->

<!-- Début Booster Section -->
<section class="booster-section">
    <h2>Sélectionnez votre Booster</h2>
    <div class="booster-slider">
        <button class="slider-btn prev-btn">❮</button>
        <div class="booster-container">
            <div class="booster-slide active">
                <img src="../img/booster.pack.png" alt="Booster Classique" class="booster-image">
                <h3>Booster Classique</h3>
                <p>"Mona Lisa"</p>
            </div>
            <div class="booster-slide">
                <img src="../img/booster.pack2.png" alt="Booster Gold" class="booster-image">
                <h3>Booster Classique</h3>
                <p>"La Nuit étoilée"</p>
            </div>
            <div class="booster-slide">
                <img src="../img/booster.pack3.png" alt="Booster Diamond" class="booster-image">
                <h3>Booster Classique</h3>
                <p>"Le Cri"</p>
            </div>
        </div>
        <button class="slider-btn next-btn">❯</button>
    </div>
    <button id="boosterBtn" class="booster-btn">
        <span class="pack-icon">🎁</span>
        Ouvrir le Booster
    </button>
    <p id="boosterTimer" class="timer-text"></p>
</section>


<!-- Swiper début (Gallery)-->
<section class="slider-container" id="gallery">
    <div class="slide-in-right"><h2 class="gallery-title">Gallerie</h2></div>
    <!-- Conteneur pour les informations de l'œuvre -->
    <div class="artwork-info"></div>
    
    <div class="swiper mySwiper">
        <div class="swiper-wrapper" id="artworkContainer">
            <!-- Les images seront chargées ici -->
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    
    <!-- Bouton unique pour ajouter à la collection -->
    <button class="add-collection-btn">Ajouter à ma collection</button>
</section>
<!-- Fin Swiper (Gallery)-->


<!-- Bouton flottant (icone "+") -->
<button class="floating-btn" id="openModalBtn">+</button>


<!-- Début Modal (exchanges) -->
<div id="exchangeModal" class="modal">
    <div class="modal-content">
        <h3>Proposer un échange</h3>
        <form class="exchange-form">
            <div class="form-group">
                <label for="personSelect">Avec qui échanger :</label>
                <select id="personSelect" required>
                    <option value="">Sélectionnez une personne</option>
                    <option value="person1">Personne 1</option>
                    <option value="person2">Personne 2</option>
                </select>
            </div>
            <div class="form-group">
                <label for="cardSelect">Œuvre à échanger :</label>
                <select id="cardSelect" required>
                    <option value="" disabled selected>Choisissez une œuvre</option>
                    <!-- Les options seront ajoutées dynamiquement -->
                </select>
            </div>
            <button type="submit" class="cta-button">Proposer l'échange</button>
        </form>
        <button id="closeModalBtn" class="close-btn">Fermer</button>
    </div>
</div>
<!-- Fin de la modal (exchanges) -->

<!-- Début Inventaire -->
 
    <section class="inventory-section" id="inventory">
        <div class="inventory-container">
            <h2 class="slide-in-right">Mon Inventaire</h2>
            <div class="inventory-grid">
                <!-- Les cartes seront ajoutées dynamiquement ici -->
            </div>
        </div>
    </section>
<!-- Fin Inventaire -->

<!-- Début Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2025 - Tous droits réservés | Lucas Coquillat</p>
        </div>
    </footer>
<!-- Fin Footer -->
    <script src="script.js"></script>
    <script src="espace_prive.js"></script>
</body>
</html>
