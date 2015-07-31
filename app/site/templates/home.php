<?php snippet('head') ?>

    <!-- Main Content -->
    <div id="main" class="home">
      <div class="vertical-center">
        <div>
          <img src="<?php echo url('assets/images/logo.svg'); ?>" alt="Nadia Kayat Architects"  draggable="false" />
          <h1 class="show-for-sr">Nadia Kayat Architects</h1>

          <div class="lang row">
            <div class="small-12 medium-6 columns"><a href="<?php echo url('/en/nadia-kayat'); ?>">English</a></div>
            <div class="small-12 medium-6 columns"><a href="<?php echo url('/de'); ?>">Deutsch</a></div>
          </div>
        </div>
      </div>
      <div class="info-links">
        <ul>
          <li>
          <li>
          <li>
        </ul>
      </div>
    </div>

    <div class="home-footer">
      <ul class="row">
        <li class="small-12 medium-4 columns"><a href="mailto:client@nadiakayatarchitects.com">client@nadiakayatarchitects.com</a></li>
        <li class="small-12 medium-4 columns"><a href="mailto:job@nadiakayatarchitects.com">job@nadiakayatarchitects.com</a></li>
        <li class="small-12 medium-4 columns"><a href="mailto:press@nadiakayatarchitects.com">press@nadiakayatarchitects.com</a></li>
      </ul>
      <div class="clearfix"></div>
      <div class="copyright">
        <?php echo $site->copyright()->kirbytext() ?>
      </div>
    </div>

    <?= js('assets/js/vendors.min.js') ?>
    <?= js('assets/js/TweenMax.min.js') ?>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.6/slick.min.js"></script>
    <?= js('assets/js/jquery.popup.js') ?>
    <?= js('assets/js/jquery.hoverIntent.min.js') ?>
    <?= js('assets/js/app.min.js') ?>

    <!-- build:remove -->
    <script src="http://localhost:35729/livereload.js"></script>
    <!-- /build -->

  </body>
</html>

