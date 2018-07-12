<!DOCTYPE html>
<html lang>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="./img/icons8-fromage-50.png" type="image/png">
    <link rel="stylesheet" href="./css/styleForm.css">
    <title>Cheesy php</title>
</head>

<body>
    <main>
        <section>
            <p>
             <?php
                // Afficher les erreurs à l'écran
                ini_set('display_errors', 1);
                // Enregistrer les erreurs dans un fichier de log
                ini_set('log_errors', 1);
                // Nom du fichier qui enregistre les logs (attention aux droits à l'écriture)
                ini_set('error_log', dirname(__file__) . '/log_error_php.txt');
                // Afficher les erreurs et les avertissements
                error_reporting(E_ALL);
                ?>   
            </p>

    <article>
<?php
    //on récupère les inputs du formulaire
    $nom = $_POST["nom"];
    $type = $_POST["type"];
    $pays = $_POST["pays"];
    $classement = $_POST["classement"];
    //on stocke l'url du json
    $sile = './js/fromages.json';
 
        // On récupére le contenu existant
        $sileData = file_get_contents($sile); 
        // On récupère le JSON dans un tableau PHP
        $tableau_pour_json = json_decode($sileData, true);
        // On ajoute le nouvel élement
        array_push( $tableau_pour_json, array(
            'nom' => $nom,
            'type' => $type,
            'pays' => $pays,
            'classement' => $classement
        ));
        // On réencode en JSON
        $contenu_json = json_encode($tableau_pour_json);         
        // On stocke tout le JSON
        file_put_contents($sile, $contenu_json);
        if (file_put_contents($sile, $contenu_json) === FALSE) {
            echo "</br></br> Une erreur est survenue!";
        }
        else {
            echo "Le fromage: ", $nom,  " a été ajouté avec succès!";
        }
   
    echo'</br></br>';
?>
<a href="./moreCheese.html">Retour</a> </br>
<a href="./fromage.html">Voir les meilleurs fromages</a>
            </article>
        </section>
    </main>
</body>

</html>