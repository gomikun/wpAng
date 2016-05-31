// Controlleurs

microcravate.controller('AccueilCtrl', ['$scope', '$location', '$http', '$routeParams', 'ngAudio', '$anchorScroll', function($scope, $location, $http, $routeParams, ngAudio, $anchorScroll) {
	
    //recupere tous les posts
    $http.get('wp-json/wp/v2/posts?_embed').success(function(res){
        $scope.posts = res;      
        console.log('Accueil chargé.');    
    });
}]);

microcravate.controller('LecteurCtrl', ['$scope', '$location', '$http', '$routeParams', 'ngAudio', '$anchorScroll', function($scope, $location, $http, $routeParams, ngAudio, $anchorScroll) {
    
    //recupere tous les posts
    $http.get('wp-json/wp/v2/posts/?_embed').success(function(res){
        $scope.posts = res;        
    
        //dernier post par défaut chargé dans le lecteur
        $scope.chargePost($scope.posts[0]);
    });
    
    //initialisation bouton Play
    $scope.boutonPlay = "wp-content/themes/wpAng/img/Pause_Icon.svg";
    //initialisation bouton Mute
    $scope.boutonMute = "wp-content/themes/wpAng/img/Mute_Icon.svg";
    
    //icon lecture/pause
    $scope.clicPlay = function(statutBtnPlay){
        if(statutBtnPlay == "wp-content/themes/wpAng/img/Play_Icon.svg") {
            $scope.boutonPlay = "wp-content/themes/wpAng/img/Pause_Icon.svg";
        } else {
            $scope.boutonPlay = "wp-content/themes/wpAng/img/Play_Icon.svg";
        }
    }
    
    //icon mute
    $scope.clicMute = function(statutBtnMute){
        if(statutBtnMute == "wp-content/themes/wpAng/img/Mute_Icon.svg") {
            $scope.boutonMute = "wp-content/themes/wpAng/img/Mute_Icon_on.svg";
        } else {
            $scope.boutonMute = "wp-content/themes/wpAng/img/Mute_Icon.svg";
        }
        
    }
    
    //chargement post dans le lecteur
    $scope.chargePost = function(post){        
        
        console.log("charge le post " + post.id);
        //id du post    
        var idPost = post.id;
        //illustration et titre du post
        $scope.imagePlayer = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
        $scope.titrePlayer = post.title.rendered;
        //retirer le lien audio MP3 embedded dans le contenu
        $scope.descPlayer = $scope.retireAudioEmbed(post.content.rendered);
        // auteur du post
        $scope.auteurPlayer = post._embedded.author[0].name;
        //modif date pour qu'elle soit lisible
        $scope.datePlayer = $scope.modifDate(post.date);
        //récupere l'audio du post
        $http.get('wp-json/wp/v2/media/?filter[post_parent]='+idPost).success(function(res){
            var audioInfo = res;              
            //info du fichier audio
            var audioFichier = audioInfo[0].source_url;
            //duree du fichier audio
            $scope.duree = audioInfo[0].media_details.length_formatted;
            //chargement audio
            $scope.audio = ngAudio.load(audioFichier);
            //lance l'audio
            $scope.audio.play();
            
            console.log("post " + post.id + " chargé");
        });
        
        //scrolle en haut de la page
        $location.hash('banniere');
        $anchorScroll();
        //mise à jour du title
        document.querySelector('title').innerHTML = 'Micro-Cravate | ' + $scope.titrePlayer;
    }
    
    //modification de la date
    $scope.modifDate = function(date) {
        var dateJSON = new Date(date);
        var dateLocaleJSON = dateJSON.toLocaleDateString();
        var heureLocaleJSON = dateJSON.toLocaleTimeString();
        var dateModif = dateLocaleJSON + " - " + heureLocaleJSON;
        
        return dateModif;
    }
    
    //retirer le lien audio MP3 embedded dans le contenu
    $scope.retireAudioEmbed = function(contenuPost){
        var regexAudio = /<a href="([^\'\"]+)\.mp3">(.)*<\/a>/;
        var contenuModif = contenuPost.replace(regexAudio, "");
        
        return contenuModif;
    }
    
    //stoppe la lecture en cours lorsqu'on charge un nouveau post
    $scope.stopAudio = function() {
        $scope.audio.stop();
    }
    
}]);
    
microcravate.controller('ReportagesCtrl', ['$scope', '$location', '$http', '$routeParams', 'ngAudio', '$anchorScroll', function($scope, $location, $http, $routeParams, ngAudio, $anchorScroll) {
    //recupere les posts de la catégorie
    $http.get('wp-json/wp/v2/posts?_embed&filter[category_name]=reportages').success(function(res){
        $scope.posts = res;
        console.log('Reportages chargé.');
    });
    
}]);
    
microcravate.controller('CreationsCtrl', ['$scope', '$location', '$http', '$routeParams', 'ngAudio', '$anchorScroll', function($scope, $location, $http, $routeParams, ngAudio, $anchorScroll) {
    //recupere les posts de la catégorie
    $http.get('wp-json/wp/v2/posts?_embed&filter[category_name]=creations').success(function(res){
        $scope.posts = res;
        console.log('Creations chargé.');
    });
    
}]);

microcravate.controller('EmissionsCtrl', ['$scope', '$location', '$http', '$routeParams', 'ngAudio', '$anchorScroll', function($scope, $location, $http, $routeParams, ngAudio, $anchorScroll) {
    //recupere les posts de la catégorie
    $http.get('wp-json/wp/v2/posts?_embed&filter[category_name]=emissions').success(function(res){
        $scope.posts = res;
        console.log('Emissions chargé.');
    });
    
}]);