<?php
/*
 * Site Header
 *
 * @package F1 Growth10
 * @author Factor1 Studios
 * @since 0.1.0
 */

global $post;

// Default template
$isDefault = is_page() && !is_page_template();

// Check if hero exists
$bg = wp_get_attachment_image_src(get_field('hero_b_background', $post->ID), 'home_hero');

// Check if template
$is_template = is_page_template( 'templates/preview-page.php' );

// check if single
$is_singular = is_singular('f1_staffgrid_cpt');

// Check if flex template 
$isFlex = is_page_template('templates/flexible.php');
$heroType = $isFlex ? get_field('default_hero_type') : false; 

$headerClass = ($isDefault && $bg) || ($isFlex && $heroType) || ($is_template && $bg) || ($is_singular) ? ' has-hero' : ''; ?>

<header class="site-header<?php echo $headerClass; ?>">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="site-header__logo">
	        <a href="<?php echo esc_url(home_url()); ?>">
            <img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-white.svg" alt="<?php echo get_bloginfo('name'); ?>">
          </a>
        </div>

        <?php if( !is_page( get_option('woocommerce_cart_page_id') ) ) :
          if( is_user_logged_in() ) :
            $dash = get_field('dashboard_link', 'option'); ?>
            
            <div class="site-header__utility">

              <?php if( $dash ) : ?>
                <a href="<?php echo esc_url($dash['url']); ?>" class="dashboard-link" role="link" title="<?php echo $dash['title']; ?>" target="<?php echo $dash['target']; ?>">
                  <?php echo $dash['title']; ?>
                </a>
              <?php endif; ?>

              <button class="menu-icon menu-icon--main">
                <small class="sm-hide">Navigation</small>

                <span></span>
              </button>

            </div>

          <?php elseif($is_template) :

            wp_nav_menu(
              array(
                'theme_location' => 'preview',
                'container' => 'nav',
                'container_class' => 'nav--primary lg-only',
              )
            );            

          else:

            wp_nav_menu(
              array(
                'theme_location' => 'primary',
                'container' => 'nav',
                'container_class' => 'nav--primary lg-only',
              )
            ); ?>

            <button class="menu-icon menu-icon--main lg-hide"><span></span></button>

          <?php endif;
        endif; ?>

      </div>
    </div>
  </div>
</header>
