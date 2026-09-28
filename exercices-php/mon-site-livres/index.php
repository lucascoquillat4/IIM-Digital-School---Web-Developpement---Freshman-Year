<?php
require 'connexion.php';

// Récupérer les livres
$sql = "SELECT * FROM livres";
$stmt = $conn->query($sql);
$livres = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Catalogue de Livres</title>
</head>
<body>
    <h1>Liste des Livres</h1>
    <table border="1" cellpadding="5">
        <thead>
            <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Année</th>
                <th>Disponible</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($livres as $livre): ?>
                <tr>
                    <td><?php echo $livre['id']; ?></td>
                    <td><?php echo htmlspecialchars($livre['titre']); ?></td>
                    <td><?php echo htmlspecialchars($livre['auteur']); ?></td>
                    <td><?php echo $livre['annee_publication']; ?></td>
                    <td><?php echo $livre['disponible'] ? 'Oui' : 'Non'; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <h2>Ajouter un nouveau livre</h2>
<form method="POST" action="ajouter.php">
    <label>Titre :</label><br>
    <input type="text" name="titre" required><br><br>

    <label>Auteur :</label><br>
    <input type="text" name="auteur" required><br><br>

    <label>Année de publication :</label><br>
    <input type="number" name="annee_publication" min="0" max="9999"><br><br>

    <label>Disponible :</label><br>
    <select name="disponible">
        <option value="1">Oui</option>
        <option value="0">Non</option>
    </select><br><br>

    <button type="submit">Ajouter</button>
</form>

</body>
</html>

