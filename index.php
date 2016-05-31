<!doctype html>
<html lang="fr" ng-app="microcravate">

<head>
    <meta charset="utf-8">
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Micro-Cravate</title>
    <!--   CSS-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/style.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/node_modules/angular-material/angular-material.css">
    
    <!--chargement des scripts wp-->
    <?php wp_head(); ?>

</head>

<body>
    
    <div id="page">
        <div class="container" flex>
            <header>
                <div id="banniere">
                    <img src="<?php bloginfo('template_directory') ?>/img/banderole.jpg" alt="logo">
                </div>
            </header>

            <nav layout="row">
                <div flex><a flex href="<?php echo site_url(); ?>">Accueil</a></div>
                <div flex><a flex href="<?php echo site_url(); ?>/reportages">reportages</a></div>
                <div flex><a flex href="<?php echo site_url(); ?>/creations">créations</a></div>
                <div flex><a flex href="<?php echo site_url(); ?>/emissions">émissions</a></div>
                <div flex><a flex href="<?php echo site_url(); ?>/association">association</a></div>
                <input flex ng-model="txtRecherche" placeholder="rechercher..."></input>
            </nav>
            
            <div class="player" ng-controller="LecteurCtrl">

                <div class="lecteur" layout="row">
                    <div class="illu" layout="column">
                        <img src="{{imagePlayer}}" alt="{{titrePlayer}}">
                        <div class="titre"><h1 ng-bind-html="titrePlayer"></h1></div>
                        <div class="auteurDate">{{auteurPlayer}} - {{datePlayer}}</div>
                    </div>

                    <div class="infos" layout="column">
                        <div class="controles" layout="column">
                            <div layout="row" layout-align="center center">
                                <md-button class="md-fab md-primary" aria-label="Lecture" ng-click='audio.paused ? audio.play() : audio.pause(); clicPlay(boutonPlay)'>
                                    <md-icon md-svg-src="{{boutonPlay}}"></md-icon>
                                </md-button>

                                <md-button class="md-fab md-primary" aria-label="Muet" ng-click='audio.muting = !audio.muting; clicMute(boutonMute)'>
                                    <md-icon md-svg-src="{{boutonMute}}"></md-icon>
                                </md-button>   

                                <label id="temps">{{audio.currentTime | trackTime}} | {{duree}}</label>

                                <md-slider flex class="md-warn" ng-model="audio.progress" min="0" max="1" step="0.01" aria-label="Temps"></md-slider>
                            </div>

                            <div id="volume" layout="row" layout-align="center center">
                                <label>Volume</label>
                                <md-slider flex class="md-primary" ng-model="audio.volume" min="0" max="1" step="0.01" aria-label="Volume"></md-slider>
                            </div>
                        </div>  

                        <div class="details">  
                            <div class="desc" ng-bind-html="descPlayer"></div>
                        </div>
                    </div>    
                </div>
            
                <!--vues-->
                <div ng-view>Chargement en cours...</div>
            </div>
            <footer>
            &copy; Micro-Cravate <?php echo date( 'Y' ); ?> - Illustrations : <a href="http://www.jacqueslebourgeois.be">Jacques Le Bourgeois</a>
            </footer>
            
        </div>
        
        <!-- chargements des scripts wp-->
        <?php wp_footer(); ?>
    </div>
         
</body>

</html>