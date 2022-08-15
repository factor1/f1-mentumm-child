<?php
/**
 * CTA - Hashed
 *
 * Template part used on the various templates/views
 *
 * @package F1 Growth10
 * @author Factor1 Studios
 * @since 1.3.1
 */

$bg = wp_get_attachment_image_src(get_sub_field('cta_background'), 'home_hero');
$headline = get_sub_field('cta_headline');
$desc = get_sub_field('card_description');
?>

<section class="cta" style="background: url('<?php echo $bg[0]; ?>') center/cover no-repeat">
  <div class="container">
    <div class="row row--justify-content-center row--align-items-center">
      <div class="col-10 sm-col-12 text-center">
        <h2><?php echo $headline; ?></h2>
      </div>

      <div class="col-6">
        <div class="cta__card" id="plan-data">
        
          <div class="cta__toggle">
            <span>Monthly</span>

            <label class="switch">
              <input type="checkbox">
              <span class="slider"></span>
            </label>

            <span>Annual</span>
          </div>

          <?php echo $desc; ?>

          <?php // Monthly content ?>
          <div class="cta__price monthly active text-center" id="monthly"></div>

          <?php // Yearly content ?>
          <div class="cta__price annual text-center" id="annual"></div>

        </div>

        <div class="cta__card text-center" id="error" style="display:none;">
            <h2>404</h2>
            <em><small>Plan not found!</small></em>
        </div>

      </div>
    </div>
  </div>
</section>
