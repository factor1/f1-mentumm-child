<?php

  add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 11 );
    function enqueue_child_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/dist/theme.css' );
    wp_enqueue_style( 'child-style-map', get_stylesheet_directory_uri().'/dist/theme.css.map' );
  }
