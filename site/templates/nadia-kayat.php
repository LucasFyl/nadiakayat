<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="bio">
	<div class="row">
		<?php if($image = $page->image('id.jpg')): ?>
		<img src="<?php echo $image->url() ?>" class="small-12 medium-4 large-2 columns" alt="Nadia Kayat" />
		<?php endif ?>
		<p class="small-12 medium-8 large-10 columns"><?php echo $page->text()->html() ?></p>
	</div>
	<div class="clearfix"></div>
  	
  	<div class="row">
  		<?php echo $page->resume()->kirbytext() ?>
  	</div>
</div>

<?php snippet('footer') ?>
