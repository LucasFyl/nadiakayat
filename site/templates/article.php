<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="article">
  <h1>"<?php echo $page->title()->html() ?>"</h1>
  <h2><?php echo $page->media()->html() ?></h2>
  <p>Click on the image to expand.</p>

  <?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
    <figure>
      <a href="<?php echo $image->url() ?>" target="_blank">
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
      </a>
    </figure>
  <?php endforeach ?>

  <a href="<?php echo $page->link()->html() ?>" target="_blank">open original article <i class="fa fa-external-link"></i></a>

  <nav class="nextprev cf" role="navigation">
      <?php if($prev = $page->prevVisible()): ?>
      <a class="prev" href="<?php echo $prev->url() ?>">&larr; previous</a>
      <?php endif ?>
      <?php if($next = $page->nextVisible()): ?>
      <a class="next" href="<?php echo $next->url() ?>">next &rarr;</a>
      <?php endif ?>
    </nav>
</div>

<?php snippet('footer') ?>