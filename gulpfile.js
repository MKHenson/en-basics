var gulp = require('gulp');
var ts = require('gulp-typescript');
var fs = require('fs');
var download = require('gulp-download');
var rename = require('gulp-rename');

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
         getDefinition("https://raw.githubusercontent.com/MKHenson/app-engine/dev/generated-definitions/external-interfaces.d.ts", "lib/definitions/required/", "external-interfaces.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/app-engine/dev/generated-definitions/app-engine.d.ts", "lib/definitions/required/", "app-engine.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/app-engine/dev/generated-definitions/app-engine-client.d.ts", "lib/definitions/required/", "app-engine-client.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/app-engine/dev/generated-definitions/export-token.d.ts", "lib/definitions/required/", "export-token.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/app-engine/dev/generated-definitions/engine-definitions.d.ts", "lib/definitions/required/", "engine-definitions.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/users/dev/dist/definitions/definitions.d.ts", "lib/definitions/required/", "users.d.ts"),
            getDefinition("https://raw.githubusercontent.com/MKHenson/modepress/dev/server/definitions/modepress-api.d.ts", "lib/definitions/required/", "modepress-api.d.ts")
         ]);
});

/**
 * Concatenates and builds all TS code into a single file
 */
gulp.task('ts-code', function() {

    return gulp.src(tsFiles, { base: "lib" })
        .pipe(ts({
            "module": tsConfig.module,
            "removeComments": tsConfig.removeComments,
            "noEmitOnError": tsConfig.noEmitOnError,
            "declaration": tsConfig.declaration,
            "sourceMap": tsConfig.sourceMap,
            "preserveConstEnums": tsConfig.preserveConstEnums,
            "target": tsConfig.target,
            "out": tsConfig.out
            }))
        .pipe(gulp.dest("dist"));
});

gulp.task('build-all', ['ts-code']);