var gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    mocha = require('gulp-mocha'),
    concat = require("gulp-concat"),
    babel = require("gulp-babel"),
    sass = require("gulp-sass"),
    shell = require('gulp-shell'),
    autoprefixer = require('gulp-autoprefixer');

var catchError = function (e) {
    console.log('>>> ERROR', e);
    // emit here
    this.emit('end');
};

gulp.task("default", () => gulp.start([
    'copy-public',
    'gen-html',
    'gen-js',
    'gen-css',
    'gen-lib-js',
    'gen-lib-css'
]));

gulp.task('dev', ['default'], () => {
    gulp.watch([
        'src/**/*'
    ], ['default']);
});

//gulp.task('start-server', shell.task(['sh start-server.sh']));

gulp.task('copy-public', () =>
    gulp.src(['src/public/**/*'])
        .pipe(gulp.dest("release/public"))
);

gulp.task("gen-html", () =>
    gulp.src([
            "src/components/head/head.html",
            "src/components/**/!(footer)*.html",
            "src/components/footer/footer.html"
        ])
        .pipe(concat("index.ejs"))
        .pipe(gulp.dest('server/views'))
        .pipe(concat("index.html"))
        .pipe(gulp.dest('release'))
);

gulp.task('gen-js', () =>
    gulp.src(['src/components/app.es6', 'src/components/**/*.es6'])
        .pipe(concat('app.js'))
        .pipe(babel())
        .on('error', catchError)
        .pipe(gulp.dest("release/public"))
);

gulp.task('gen-css', () =>
    gulp.src([
            'src/components/global/global.scss',
            "src/components/**/*.scss"
        ])
        .pipe(concat('app.scss'))
        .pipe(sass({errLogToConsole: true}))
        .on('error', function (e) {
            console.log('>>> ERROR', e);
            this.emit('end');
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .on('error', function (e) {
            console.log('>>> ERROR', e);
            this.emit('end');
        })
        .pipe(gulp.dest("release/public"))
);

gulp.task('gen-lib-js', () =>
    gulp.src([
            'src/bower-components/jquery/dist/jquery.min.js',
            'src/bower-components/angular/angular.min.js',
            'src/bower-components/angular-ui-router/release/angular-ui-router.min.js',
            'src/bower-components/lodash/dist/lodash.min.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest("release/public"))
);

gulp.task('gen-lib-css', () =>
    gulp.src([
            'src/bower-components/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest("release/public"))
);