<?php

//charger Angular + material design
function charger_scripts() {
    
    wp_register_script(
        'angularjs', 
        get_template_directory_uri() . '/node_modules/angular/angular.js'
    );
    wp_register_script(
        'angularjs-route', 
        get_template_directory_uri() . '/node_modules/angular-route/angular-route.js'
    );
    wp_register_script(
        'angular-aria', 
        get_template_directory_uri() . '/node_modules/angular-aria/angular-aria.js'
    ); 
    wp_register_script(
        'angular-material', 
        get_template_directory_uri() . '/node_modules/angular-material/angular-material.js'
    );
    wp_register_script(
        'angular-messages', 
        get_template_directory_uri() . '/node_modules/angular-messages/angular-messages.js'
    ); 
    wp_register_script(
        'angular-animate', 
        get_template_directory_uri() . '/node_modules/angular-animate/angular-animate.js'
    );  
    wp_register_script(
        'angular-audio', 
        get_template_directory_uri() . '/node_modules/angular-audio/app/angular.audio.js'
    ); 
    wp_register_script(
        'angular-sanitize', 
        get_template_directory_uri() . '/node_modules/angular-sanitize/angular-sanitize.js'
    );
    
    wp_enqueue_script(
        'scripts_wpAng_app', 
        get_template_directory_uri() . '/js/app.js',
        array('angularjs', 'angularjs-route', 'angular-aria', 'angular-animate', 'angular-messages', 'angular-material', 'angular-audio', 'angular-sanitize')
    );
    
    wp_enqueue_script(
    'scripts_wpAng_ctrl', 
        get_template_directory_uri() . '/js/ctrl.js',
        array('angularjs', 'angularjs-route', 'angular-aria', 'angular-animate', 'angular-messages', 'angular-material', 'angular-audio', 'angular-sanitize')
    );
    
    wp_localize_script(
		'scripts_wpAng_app',
		'wpAngUrl', //nom de la variable qui contient les données
		array(
			'vues' => trailingslashit( get_template_directory_uri() ) . 'vues/'            
			)
	);
}

add_action( 'wp_enqueue_scripts', 'charger_scripts');

add_theme_support( 'post-thumbnails' ); //ajouter des featured image

?>