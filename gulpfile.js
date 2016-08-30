var gulp = require('gulp');
var ts = require('gulp-typescript');
var fs = require('fs');
var download = require('gulp-download');
var rename = require('gulp-rename');

// CONFIG
//========
// Read the contents of the tsconfig file so we dont have to specify the files twice
var tsConfig = JSON.parse(fs.readFileSync('tsconfig.json'));
var tsFiles = tsConfig.files;
var animatePluginDir = '../app-engine/client/dist/plugins';

// Make sure the files exist
for (var i = 0, l = tsFiles.length; i < l; i++ )
    if(!fs.existsSync(tsFiles[i]))
    {
        console.log("File does not exist:" + tsFiles[i] );
        process.exit();
    }

/**
 * This function downloads a definition file from github and writes it to a destination
 * @param {string} url The url of the file to download
 * @param {string} dest The destination folder to move the file to
 */
function getDefinition(url, dest, name) {
    return new Promise(function(resolve, reject) {
        download(url)
            .pipe(rename(name))
            .pipe(gulp.dest(dest))
            .on('error', function(err) {
                throw(err)
            })
            .on('end', function() {
                resolve(true);
            })
    });
}

/**
 * Downloads the definition files used in the development of the application and moves them into the definitions folder
 */
gulp.task('install-definitions', function () {
     return Promise.all([
         getDefinition("https://raw.githubusercontent.com/PixelSwarm/hatchery-editor/dev/lib/definitions/generated/hatchery-editor.d.ts", "lib/definitions/required/", "hatchery-editor.d.ts"),
            getDefinition("https://raw.githubusercontent.com/PixelSwarm/hatchery-server/dev/lib/definitions/generated/app-engine.d.ts", "lib/definitions/required/", "hatchery-server.d.ts"),
            getDefinition("https://raw.githubusercontent.com/Webinate/users/dev/src/definitions/custom/definitions.d.ts", "lib/definitions/required/", "users.d.ts"),
            getDefinition("https://raw.githubusercontent.com/Webinate/modepress/dev/src/definitions/custom/modepress-api.d.ts", "lib/definitions/required/", "modepress-api.d.ts")
         ]);
});

/**
 * Concatenates and builds all TS code into a single file
 */
gulp.task('ts-code', function() {

    return gulp.src(tsFiles, { base: "lib" })
        .pipe(ts({
            "module": tsConfig.compilerOptions.module,
            "removeComments": tsConfig.compilerOptions.removeComments,
            "noEmitOnError": tsConfig.compilerOptions.noEmitOnError,
            "declaration": tsConfig.compilerOptions.declaration,
            "sourceMap": tsConfig.compilerOptions.sourceMap,
            "preserveConstEnums": tsConfig.compilerOptions.preserveConstEnums,
            "target": tsConfig.compilerOptions.target,
            "out": tsConfig.compilerOptions.out,
            "jsx": tsConfig.compilerOptions.jsx
            }))
        .pipe(gulp.dest(tsConfig.compilerOptions.outDir));
});

gulp.task('copy-to-engine', ['ts-code'], function() {
    return gulp.src( tsConfig.compilerOptions.outDir + "/**", { base: tsConfig.compilerOptions.outDir })
        .pipe(gulp.dest(animatePluginDir + "/en-basics"))
})

gulp.task('build-all', ['copy-to-engine']);