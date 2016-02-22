var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var filter = require('gulp-filter');
var fs = require('fs');

// Read the contents of the tsconfig file so we dont have to specify the files twice
var tsConfig = JSON.parse(fs.readFileSync('tsconfig.json'));
var tsFiles = tsConfig.files;

// Make sure the files exist
for (var i = 0, l = tsFiles.length; i < l; i++ )
    if(!fs.existsSync(tsFiles[i]))
    {
        console.log("File does not exist:" + tsFiles[i] );
        process.exit();
    }

// CONFIG
// ==============================
var outDir = "./dist";

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