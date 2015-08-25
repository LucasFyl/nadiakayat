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
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Penthouse Charlottenstraße</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Showroom für Luxusimmobilien</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Hotel Monbijou</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Showflat</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Lacrem-Swisscosmetics</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Showroom</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Haus Märkisches Ufer</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Hotel Ferrier</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Kone</h2>
	  	</div>
	  	<div class="small-12 medium-6">
			<h2 class="disabled">Millenium Projekt</h2>
	  	</div>
	</section>

</div>

<?php snippet('footer') ?>