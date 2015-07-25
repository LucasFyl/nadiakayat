module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //=== include all bowerlibs
    bower_concat: {
      js: {
        dest: 'app/assets/js/vendors.js',
        mainFiles: {
          'retinajs': 'retina.js',
        },
      },
      css: {
        cssDest: 'app/assets/css/vendors.css',
        mainFiles: {
          'highlightjs': 'styles/github.css',
        },
        exclude: ['foundation', 'retinajs']
      }
    },

    //=== compress js
    uglify: {
      bower: {
        options: {
          compress: {
            warnings: false
          },
          mangle: true,
        },
        files: {
          'app/assets/js/vendors.min.js': 'app/assets/js/vendors.js'
        }
      },
      app: {
        options: {
          compress: {
            warnings: false
          },
          mangle: true,
        },
        files: {
          'app/assets/js/app.min.js': 'app/assets/js/app.js'
        }
      }
    },

    //=== compile scss

    sass: {
      options: {
          sourcemap: true,
          outputStyle: 'compressed',
          includePaths: ['bower_components/foundation/scss'],
        },
      app: {
        files: {
          'app/assets/css/app.css' : 'app/assets/scss/app.scss'
        }
      }
    },

    //=== add browser prefixes
    autoprefixer: {
      bower: {
        expand: true,
        cwd: 'build',
        src: 'app/assets/css/vendors.css',
        dest: 'dist/assets/css'
      },
      app: {
        expand: true,
        cwd: 'build',
        src: 'app/assets/css/app.css',
        dest: 'dist/assets/css'
      }

    },

    //=== combine and compress css
    cssmin: {
      bower: {
        files: {
          'app/assets/css/vendors.min.css': 'app/assets/css/vendors.css'
        }
      },
      app: {
        files: {
          'app/assets/css/app.min.css': 'app/assets/css/app.css'
        }
      }
    },

    // grunt-watch will monitor the projects files
    watch: {
      scss: {
        files: 'app/assets/scss/*.scss',
        tasks: 'build-sass',
      },
      js: {
        files: 'app/assets/js/app.js',
        tasks: 'uglify:app',
      },
      livereload: {
        files: ['app/assets/js/*.js',
                'app/assets/css/*.css',
                'app/site/**/*.php'],
        options: { livereload: true }
      }
    },

    clean: {
      site: {
        src: ["dist/"],
      },
    },

    copy: {
      site: {
        files: [
          // includes files within path
          {expand: true,
           src: ['app/assets/**/*',
                 'app/kirby/**/*',
                 'app/panel/**/*',
                 'app/site/**/*',
                 'app/content/site.txt',
                 'app/content/error/**/*',
                 'app/content/search/**/*',
                 'app/content/impressum/**/*',
                 '!**/accounts/**',
                 '!**/avatars/**',
                 '!**/scss/**',
                 '!**/.git/**',
                 'app/.htaccess',
                 'app/index.php',
                 ],
           dest: 'dist/'},
          {expand: true,
           filter: 'isFile',
           src: ['content/1-blog/archive/*',
                 'content/1-blog/feed/*',
                 'content/1-blog/posts/*',
                 'content/1-blog/*',
                 ],
           dest: 'dist/'},
        ],
      },
      fontawesome: {
        files: [{
          expand: true,
          flatten: true,
          src: ['bower_components/fontawesome/fonts/**/*'],
          dest: 'app/assets/fonts/'
          },
        ],
      },
    },

    processhtml: {
      site: {
        files: {
         'dist/site/snippets/footer.php': ['site/snippets/footer.php']
        },
      },
    },
  });

  //=== require all tasks
  require('load-grunt-tasks')(grunt);

  //== Default task(s).
  // build bowerlibs
  grunt.registerTask('build-bower', [
    'bower_concat:js',
    'uglify:bower',
    'bower_concat:css',
    'autoprefixer:bower',
    'cssmin:bower',
    'copy:fontawesome',
  ]);

  // build app css
  grunt.registerTask('build-sass', [
    'sass:app',
    'autoprefixer:app',
    'cssmin:app',
  ]);

  // build
  grunt.registerTask('build', [
    'build-bower',
    'uglify:app',
    'build-sass',
  ]);

  // build dev
  grunt.registerTask('deploy', [
    'build',
    'clean',
    'copy:site',
    'processhtml',
  ]);
};
