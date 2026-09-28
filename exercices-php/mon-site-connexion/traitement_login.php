<?php
session_start();
require 'connexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $mot_de_passe = $_POST['mot_de_passe'];

    // Chercher l'utilisateur avec cet email
    $sql = "SELECT * FROM utilisateurs WHERE email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':email' => $email]);
    $utilisateur = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($utilisateur) {
        // Vérifier que le mot de passe correspond
        if (password_verify($mot_de_passe, $utilisateur['mot_de_passe'])) {
            // Authentification réussie : enregistrer en session
            $_SESSION['utilisateur_id'] = $utilisateur['id'];
            $_SESSION['email'] = $utilisateur['email'];

            // Redirection vers l'espace membre
            header('Location: espace_prive.php');
            exit;
        } else {
            echo "Mot de passe incorrect.";
        }
    } else {
        echo "Email non trouvé.";
    }
}
?>
