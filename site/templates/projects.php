<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="projects">
	<section class="row">
		<?php foreach($page->children()->visible()->limit(16) as $project): ?>
	  	<div class="small-12 medium-6">
			<h2><a href="<?php  echo $project->url(); ?>"><?php  echo $project->title()->html(); ?></a></h2>
	  	</div>
	  	<?php endforeach ?>
	  	<?php foreach($page->children()->visible()->slice(16)->limit(16) as $project): ?>
	  	<div class="small-12 medium-6">
			<h2><a href="<?php  echo $project->url(); ?>"><?php  echo $project->title()->html(); ?></a></h2>
	  	</div>
	  	<?php endforeach ?>
	</section>

</div>

<?php snippet('footer') ?>