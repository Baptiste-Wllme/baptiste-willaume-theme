<?php get_header();
?>


<section class="hero">
    <div class="hero_space"></div>
    <h1 class="hero_title">Baptiste Willaume</h1>
    <p class="hero_subtitle">Développeur wordpress</p>
    <div class="hero_links">
        <a href="https://www.linkedin.com/in/baptiste-willaume-122493191/" target="_blank">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/linkedin.svg" alt="linkedin">
        </a>
        <a href="">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/mail.svg" alt="mail">
        </a>
        <a href="">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/phone.svg" alt="phone">  
        </a>
        <a href="https://github.com/Baptiste-Wllme" target="_blank">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/github.svg" alt="github">
        </a>
        <a href="">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/download.svg" alt="download">
        </a> 
    </div>
    <div class="hero_scroll">
        <p class="text">scroll</p>
        <a href="#description">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/flèche_01.svg" alt="arrow scroll">
        </a>
    </div>
</section>

<section id="description" class="description">
    <div class="description_content">
        <div class="description_bloc1">
            <h2>Je suis Baptiste, un jeune développeur WordPress  </h2>
        </div>
        <div class="description_bloc2">
            <p>Passionné par la création de sites web modernes, rapides et sur mesure, j’aime transformer une idée en un site fluide, esthétique et facile à gérer. 
             </p>
        </div>
        <div class="description_under">
            <div class="description_bloc3">
                <p> Rigoureux et curieux, je cherche toujours à améliorer mes compétences pour offrir des solutions performantes, 
                adaptées aux besoins de chaque projet.</p>
            </div>  
            <div class="description_bloc4">
                <p> Actuellement disponible pour des missions freelance ou des opportunités en entreprise.</p>
            </div>
        </div>
        
    </div>
</section>
<section class="cv">
    <div class="cv_content">
        <h2 class="cv_title">Mon parcours professionel</h2>
        <div class="cv_timeline">

            <?php 
            $args = [
                'post_type' => 'projets',
                'posts_per_page' => -1,
                'order' => 'DESC',
            ];
            $projets = new WP_Query($args);

            if ($projets->have_posts()) :
                $i = 0;
                while ($projets->have_posts()) : 
                    $projets->the_post();
                    $class_position = ($i % 2 == 0) ? 'top' : 'bottom';
                    get_template_part('template-parts/projet-item', null, ['class_position' => $class_position]);
                    $i++;
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
        </div>  
    </div>
</section>


<?php
get_footer(); 
?>