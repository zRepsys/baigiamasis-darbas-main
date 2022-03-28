const gulp = require('gulp'),
    sass = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

const assetsDir = 'css';

function watchCss() {
    gulp.watch([assetsDir + '/**/*.scss'], gulp.parallel(cssTask, reload));
}

function watchHtml() {
    gulp.watch("*.html").on("change", browserSync.reload);
}

function cssTask() {
    return gulp.src(assetsDir + '/src/style.scss')
        .pipe(plumber({errorHandler: notify.onError("Klaida: <%= error.message %>")}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 20 versions'],
            cascade: true
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(assetsDir))
        .pipe(browserSync.stream());
}

function reload(done) {
    browserSync.reload();
    done();
}

function serve(done) {
    browserSync.init({
        //logLevel: "debug",
        server: {
            baseDir: './'
        }
    });
    done();
}

gulp.task('default', gulp.parallel(serve, cssTask, watchCss, watchHtml));