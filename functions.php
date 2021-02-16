<?php 

function wp_custheme_add_styles() {
    wp_enqueue_style( 'styles', get_template_directory_uri('/main.css') , 1.0, null, false);
    wp_enqueue_style( 'fonts', get_template_directory_uri('/fonts.css') , 1.0, null, false );
    wp_enqueue_script( 'js', get_template_directory_uri('/main.js') , 1.0, null, true );
}

add_action('wp_enqueue_scripts', 'wp_custheme_add_styles');

function wp_custheme_add_theme_support() {

}

add_action('after_theme_setup', 'wp_custheme_add_theme_support')

?>