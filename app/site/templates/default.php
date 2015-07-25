<?php snippet('head') ?>
<?php snippet('header') ?>

<!-- Main Content -->
<div id="main" class="office">
	<h1><?php echo $page->title()->html() ?></h1>
    <?php echo $page->text()->kirbytext() ?>
</div>

<?php snippet('footer') ?>
