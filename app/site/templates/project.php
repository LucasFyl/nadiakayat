<?php snippet('head') ?>
<?php snippet('header') ?>

<?php snippet('loader') ?>

<!-- Main Content -->
<div id="main" class="project">

  <section class="row">
    

    <div class="small-hidden medium-12 large-9 gallery">
      <!-- Gallery -->
      <div id="gallery">
        <?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
        <div>
          <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
        </div>
        <?php endforeach ?>
      </div>
    </div>
    
    <!-- Project Infos -->
    <div class="medium-12 large-3 infos" id="customScroll">
      <div>
        <?php echo $page->title()->kirbytext(); ?>
        <p><span class="bld">Location:</span> <?php echo $page->location()->html(); ?></p>
        <p><span class="bld">Date:</span> <?php echo $page->period()->html(); ?></p> 
        <p><span class="bld">Floor area:</span> <?php echo $page->area()->html(); ?></p> 
        <p><span class="bld">Client:</span> <?php echo $page->client()->html(); ?></p> 
        <p><span class="bld">Type of commission:</span> <?php echo $page->typeof()->html(); ?></p> 
        <p class="mb0"><span class="bld">Program:</span></p>
        <?php echo $page->program()->kirbytext(); ?></p> 

        <?php if (!$page->concept()->isEmpty()): ?>
        <p><span class="bld">Concept:</span> <?php echo $page->concept()->html(); ?></p> 
        <?php endif ?>

        <?php if (!$page->task()->isEmpty()): ?>
        <p><span class="bld">Task:</span> <?php echo $page->task()->html(); ?></p> 
        <?php endif ?>
      </div>
    </div>
    <div class="scrollControl medium-12 large-3">
      <div class="row">
        <a href="#" class="scrollTrigger up large-6 column"><i class="fa fa-chevron-up"></i></a>
        <a href="#" class="scrollTrigger down large-6 column"><i class="fa fa-chevron-down"></i></a>
      </div>
    </div>

  </section>



  <nav class="nextprev small-12" role="navigation">
    <?php if($prev = $page->prevVisible()): ?>
    <a class="prev small-6" href="<?php echo $prev->url() ?>">&larr; previous project</a>
    <?php endif ?>
    <?php if($next = $page->nextVisible()): ?>
    <a class="next small-6" href="<?php echo $next->url() ?>">next project &rarr;</a>
    <?php endif ?>
  </nav>
</div>

<?php snippet('footer') ?>