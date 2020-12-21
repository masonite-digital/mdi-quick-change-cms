<?php
/* Write your awesome functions below */
function my_custom_scripts() {
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/assets/script.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );

// this is a commit 