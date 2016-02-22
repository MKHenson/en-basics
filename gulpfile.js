var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var filter = require('gulp-filter');

// CONFIG
// ==============================
var outDir = "./dist";
var tsFiles = [
    "./definitions/es6-promise.d.ts",
    "./definitions/FileUploader.d.ts",
    "./definitions/ExportToken.d.ts",
    "./definitions/webinate-users.d.ts",
    "./definitions/definitions.d.ts",
    "./definitions/modepress-api.d.ts",
    "./definitions/app-engine.d.ts"
];

// Concatenates and builds all TS code into a single file
gulp.task('ts-code', function() {

    return gulp.src(tsFiles, { base: "." })
        .pipe(ts({
            "module": "amd",
            "removeComments": false,
            "noEmitOnError": true,
            "declaration": true,
            "sourceMap": false,
            "preserveConstEnums": true,
            "target": "es5"
            }))
        .pipe(gulp.dest(outDir));
});

gulp.task('build-all', ['ts-code']);