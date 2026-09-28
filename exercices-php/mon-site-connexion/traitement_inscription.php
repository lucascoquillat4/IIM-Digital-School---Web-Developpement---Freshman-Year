<?php
require 'connexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $mot_de_passe = $_POST['mot_de_passe'];

    // Vérifier que l'email n'est pas déjà utilisé
    $sql = "SELECT * FROM utilisateurs WHERE email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':email' => $email]);
    $utilisateur = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($utilisateur) {
        echo "Cet email est déjà utilisé. Veuillez en choisir un autre.";
    } else {
        // Hacher le mot de passe
        $mot_de_passe_hash = password_hash($mot_de_passe, PASSWORD_DEFAULT);

        // Insérer le nouvel utilisateur
        $sql = "INSERT INTO utilisateurs (email, mot_de_passe) VALUES (:email, :mot_de_passe)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':email' => $email,
            ':mot_de_passe' => $mot_de_passe_hash
        ]);

        echo "Inscription réussie. Vous pouvez maintenant <a href='login.php'>vous connecter</a>.";
    }
}
?>
