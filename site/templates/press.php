<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="press">
	<div class="row">
		<section class="small-12 medium-6 pull-left">
		  	<?php foreach($page->children()->visible()->limit(4) as $article): ?>
		  	<article>
		  		<h3><a href="<?php  echo $article->url(); ?>"><?php  echo $article->media()->html(); ?>:</a></h3>
				<h2><a href="<?php  echo $article->url(); ?>"><?php  echo $article->title()->html(); ?></a></h2>
				<p><a href="<?php  echo $article->link()->html(); ?>" target="_blank"><?php  echo $article->link()->html(); ?>&nbsp;<i class="fa fa-external-link"></i></a></p>
		  	</article>
		  	<?php endforeach ?>
	  	</section>
	  	<section class="small-12 medium-6">
	  		<?php foreach($page->children()->visible()->slice(4) as $article): ?>
	  		<article>
				<h3><a href="<?php  echo $article->url(); ?>"><?php  echo $article->media()->html(); ?>:</a></h3>
				<h2><a href="<?php  echo $article->url(); ?>"><?php  echo $article->title()->html(); ?></a></h2>
				<p><a href="<?php  echo $article->link()->html(); ?>" target="_blank"><?php  echo $article->link()->html(); ?>&nbsp;<i class="fa fa-external-link"></i></a></p>
		  	</article>
		  	<?php endforeach ?>
	  	</section>
	</div>
</div>

<?php snippet('footer') ?>
