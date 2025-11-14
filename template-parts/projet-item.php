<?php
$class_position = isset($args['class_position']) ? $args['class_position'] : '';
$lien_projet   = get_post_meta(get_the_ID(), 'lien_projet', true);
$date_projet   = get_post_meta(get_the_ID(), 'date_projet', true);
$excerpt       = get_the_excerpt();
$details_projet = get_field('details_projet');
?>

<div class="cv_item-wrapper <?php echo esc_attr($class_position); ?>">
    <?php if ($date_projet) : ?>
        <div class="cv_date">
            <p><?php echo esc_html($date_projet); ?></p>
        </div>
    <?php endif; ?>

    <div class="cv_item <?php echo esc_attr($class_position); ?>">

        <?php if (has_post_thumbnail()) : ?>
            <div class="cv_logo">
                <?php the_post_thumbnail('medium'); ?>
            </div>
        <?php endif; ?>

        <h3 class="cv_item-title"><?php the_title(); ?></h3>

        <?php if ($excerpt) : ?>
            <p class="cv_item-desc"><?php echo esc_html($excerpt); ?></p>
        <?php endif; ?>

        <button class="cv_toggle">
            <?php echo ($class_position === 'bottom') ? '▲' : '▼'; ?>
        </button>
    </div>

    <?php if ($details_projet) : ?>
        <div class="cv_more">
            <div class="cv_more-inner">
                <?php
                $texte = wp_kses_post($details_projet);
                $mots = explode(' ', $texte);
                ?>
                <p class="cv_more-animated">
                    <?php foreach ($mots as $index => $mot) : ?>
                        <span style="--i:<?php echo $index; ?>"><?php echo $mot; ?></span>
                    <?php endforeach; ?>
                </p>
                <?php if ($lien_projet) : ?>
                    <div class="cv_discover">
                        <a href="<?php echo esc_url($lien_projet); ?>" target="_blank" rel="noopener noreferrer">
                            <p>Découvrir le projet</p>
                        </a>
                    </div>
                <?php endif; ?>
            </div>    
        </div>
    <?php endif; ?>
</div>
