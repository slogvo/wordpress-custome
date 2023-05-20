<?php get_header(); ?>
<?php get_template_part('./components/breadcrumb'); ?>

<div id="content" class="body-content">
  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
      <?php // Thực hiện các hành động cần thiết trước khi hiển thị nội dung bài viết 
      ?>
      <!-- <h1><php the_title(); ?></h1> -->
      <div class="single-content margin-head" style="width: 100% ;">
        <?php the_content(); ?>
      </div>
    <?php endwhile; ?>
  <?php else : ?>
    <?php // Thông báo không có bài viết 
    ?>
  <?php endif; ?>
</div>
<?php get_footer(); ?>