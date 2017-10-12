var gulp = require("gulp"),
  sass = require("gulp-sass"),
  watch = require("gulp-watch"),
  sync = require("browser-sync");

gulp.task("styles", function(){
  return gulp.src("app/sass/**/*.sass")
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest("app/css/"))
    .pipe(sync.reload({stream: true}));
});

gulp.task("browser-sync", function(){
  sync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("watch", function(){
  gulp.watch("app/sass/**/*.sass", ["styles"]);
  gulp.watch("app/*.html", sync.reload);
  gulp.watch("app/js/*.js", sync.reload);
});

gulp.task("default", ["browser-sync", "styles", "watch"]);