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
