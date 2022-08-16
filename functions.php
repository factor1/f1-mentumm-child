<?php
  $THEME_VERSION = $NPM_PACKAGE['version'];

  define( 'THEME_VERSION', $THEME_VERSION );

  add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 11 );
  function enqueue_child_styles() {

    wp_dequeue_script( 'prelude-js' );
    wp_deregister_script( 'prelude-js' );

    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/dist/theme.css',array(), THEME_VERSION );
    wp_enqueue_style( 'child-style-map', get_stylesheet_directory_uri().'/dist/theme.css.map',array(), THEME_VERSION );
    wp_enqueue_script( 'childprelude-js', get_stylesheet_directory_uri() . '/dist/theme.js', array('jquery'),'', false );
  }