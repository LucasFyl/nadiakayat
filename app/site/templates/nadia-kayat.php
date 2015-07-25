<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="bio">
	<div class="scrollControl">
		<a href="#" class="scrollTrigger up"><i class="fa fa-chevron-up"></i></a>
	</div>
	<div class="scroll-wrap small-12 column" id="customScroll">
		<div>
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
	</div>
	<div class="scrollControl">
		<a href="#" class="scrollTrigger down columns"><i class="fa fa-chevron-down"></i></a>
	</div>
	<div class="img-wrap small-12 column">
		<figure>
			<img src="<?php echo url('assets/images/asset-bg-about.jpg'); ?>" alt="Geneva Switzerland - Train station" draggable="false" />
			<figcaption>
				<a href="http://www.jeannouvel.com/mobile/en/smartphone/#/mobile/en/smartphone/projet/geneva-switzerland-train-station1" target="blank">CEVA train station, Ateliers Jean Nouvel&nbsp;<i class="fa fa-external-link"></i></a>
			</figcaption>
		</figure>
	</div>
</div>

<?php snippet('footer') ?>
