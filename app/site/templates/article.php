<?php snippet('head') ?>
<?php snippet('header') ?>

<?php snippet('loader') ?>

<!-- Main Content -->
<div id="main" class="article">
  <h1>"<?php echo $page->title()->html() ?>"</h1>
  <h2><a href="<?php echo $page->link()->html() ?>" target="_blank"><?php echo $page->media()->html() ?></a></h2>
  <p>Click on the image to expand.</p>

  <?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
    <figure>
     <!-- class="popupimg" -->
      <a href="<?php echo $image->url() ?>" target="_blank">
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
      </a>
    </figure>
  <?php endforeach ?>

  <a href="<?php echo $page->link()->html() ?>" target="_blank">open original article <i class="fa fa-external-link"></i></a>

  <nav class="nextprev small-12" role="navigation">
    <?php if($prev = $page->prevVisible()): ?>
    <a class="prev small-6" href="<?php echo $prev->url() ?>">&larr; previous article</a>
    <?php endif ?>
    <?php if($next = $page->nextVisible()): ?>
    <a class="next small-6" href="<?php echo $next->url() ?>">next article &rarr;</a>
    <?php endif ?>
  </nav>
</div>

<?php snippet('footer') ?>