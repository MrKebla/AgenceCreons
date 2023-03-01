<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Accueil | GraphWe </title>
        <script src="https://kit.fontawesome.com/56e3538f94.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"> <!--Les deux polices-->
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet">
        <link rel="icon" href="img/Logo_GW.png" type="image/png" />
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header class="accueil">
            <div class="overlay"></div>
            <ul class="menu">
                <li><a href="index.html"> Accueil </a></li>
                <li><img src="img/etoile_vert.png" alt="etoile vert"></li>
                <li><a href="creer.html"> Cr&eacute;er </a></li>
                <li><img src="img/etoile_rouge.png" alt="etoile rouge"></li>
                <li><a href="#"> Galerie </a></li>
                <li><img src="img/etoile_cyan.png" alt="etoile cyan"></li>
                <li><a href="profil.html"> Profil</a></li>
                <li><img src="img/etoile_jaune.png" alt="etoile jaune"></li>
                <li><a href="aide.html"> Aide </a></li>
            </ul>
        </header>
        <section class="dessin">
            <div class="container">
                <div class="dessins">
                    <h1> Créations </h1>
                    <?php
                        if ($handle = opendir("images/"))
                        {
                            while (false !== ($file = readdir($handle)))
                            {
                                if ($file != "." && $file != "..") {
                                    echo "<a href=\"images/$file\" target=\"_blank\"><img width=\"150\" src=\"images/$file\"> </a>";
                                }
                            }
                            closedir($handle);
                        }
                        else 
                        {
                            echo"Pas d'images";
                        }
                    ?> 
                </div>
            </div>
        </section>
        
        <script src="js/app.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" 
        integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q==" 
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>  
    </body>
</html>