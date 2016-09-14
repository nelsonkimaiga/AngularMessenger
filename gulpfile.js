var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('jshint:client', function () {
    return gulp.src('./client/*.js')
            .pipe(jshint({
                "strict": true,
                "lookup": false,
                "curly": true,
                "eqnull": true,
                "unused": true,
                "eqeqeq": true,
                "undef": true,
                "camelcase": true,
                "forin": true,
                "immed": true,
                "latedef": true,
                "newcap": true,
                "quotmark": "double",
                "trailing": true,
                "globals": {"angular": true, "window": true, "XMLHttpRequest": true},
                '-W097': true
            }
            ))
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jshint:server', function () {
    return gulp.src('./server/**/*.js')
            .pipe(jshint({
                "lookup": false,
                "strict": true,
                "curly": true,
                "eqnull": true,
                "unused": true,
                "eqeqeq": true,
                "undef": true,
                "camelcase": true,
                "forin": true,
                "immed": true,
                "node": true,
                "latedef": true,
                "newcap": true,
                "quotmark": "double",
                "trailing": true,
                "globals": {exports: true, require: true},
                '-W097': true
            }
            ))
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task("jshint", ["jshint:client", "jshint:server"]);
gulp.task("default", ["jshint:client", "jshint:server"]);
