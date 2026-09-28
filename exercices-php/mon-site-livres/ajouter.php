<?php
require 'connexion.php';

// Vérif si données envoyées
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titre = $_POST['titre'];
    $auteur = $_POST['auteur'];
    $annee_publication = $_POST['annee_publication'];
    $disponible = $_POST['disponible'];

    // Insertion
    $sql = "INSERT INTO livres (titre, auteur, annee_publication, disponible) 
            VALUES (:titre, :auteur, :annee_publication, :disponible)";

    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':titre' => $titre,
        ':auteur' => $auteur,
        ':annee_publication' => $annee_publication,
        ':disponible' => $disponible
    ]);

    // Redirection page d'accueil après ajout
    header("Location: index.php");
    exit;
}
?>
