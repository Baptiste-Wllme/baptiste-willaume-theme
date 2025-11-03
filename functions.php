<?php
if ( !defined( 'ABSPATH' ) ) exit;

function blankslate_child_enqueue_styles() {
    
    wp_enqueue_style(
        'blankslate-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('blankslate-parent-style'),
        filemtime(get_stylesheet_directory() . '/style.css')
    );

    
}
add_action('wp_enqueue_scripts', 'blankslate_child_enqueue_styles');

function create_projets_cpt() {
    register_post_type('projets', [
        'label' => 'Projets',
        'public' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-portfolio',
    ]);
}
add_action('init', 'create_projets_cpt');

function theme_enqueue_scripts() {
    wp_enqueue_script('timeline-js', get_stylesheet_directory_uri() . '/assets/js/timeline.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');

