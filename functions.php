<?php
  $THEME_VERSION = $NPM_PACKAGE['version'];

  define( 'THEME_VERSION', $THEME_VERSION );

  add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 11 );
  function enqueue_child_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/dist/theme.css',array(), THEME_VERSION );
    wp_enqueue_style( 'child-style-map', get_stylesheet_directory_uri().'/dist/theme.css.map',array(), THEME_VERSION );
    wp_register_script( 'hashedjs', get_stylesheet_directory_uri() . '/dist/theme.js', array('jquery'),'', false );
    wp_enqueue_script('hashedjs');
  }