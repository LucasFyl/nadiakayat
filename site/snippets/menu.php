<nav>

  <ul>
    <?php foreach($pages->find('en')->children()->visible() as $subpage): ?>
    <li class="small-6 medium-4 large-2" >
      <a <?php e($subpage->isOpen(), ' class="active"') ?>  href="<?php echo $subpage->url() ?>">
        <?php echo html($subpage->title()) ?>
      </a>
    </li>
    <?php endforeach ?>
    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
  </ul>

</nav>
