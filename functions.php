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
    wp_enqueue_script(
        'timeline-js',
        get_stylesheet_directory_uri() . '/assets/js/timeline.js',
        array(),
        null,
        true
    );

    // GSAP
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
        array(),
        null,
        true
    );

    // ScrollTrigger
    wp_enqueue_script(
        'scrolltrigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
        array('gsap'),
        null,
        true
    );

    // Animations GSAP perso
    wp_enqueue_script(
        'gsap-animations',
        get_stylesheet_directory_uri() . '/assets/js/gsap-animations.js',
        array('gsap', 'scrolltrigger'),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');




