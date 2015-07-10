<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="text">
    	<h1><?php echo $page->title()->html() ?></h1>
	
		<h2>This is the contact.php template</h2>

      	<?php echo $page->text()->kirbytext() ?>
    </div>

  </main>

<?php snippet('footer') ?>
