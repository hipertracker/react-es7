var rimraf = require('rimraf');

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var compileSass = require('broccoli-sass');

var esTranspiler = require('broccoli-6to5-transpiler');

var fastBrowserify = require('broccoli-fast-browserify');
var browserify = require('broccoli-browserify');

//var uglifyJavaScript = require('broccoli-uglify-js');
var uglifyJavaScript = require('broccoli-uglify-sourcemap');

var gzipFiles = require('broccoli-gzip');


var staticFiles = new Funnel('src', {
    files: ['index.html']
});

//var jqueryFiles = new Funnel('node_modules/jquery/dist/cdn', {
//    include: [
//        new RegExp(/\.min\.(js|map)$/),
//    ],
//    destDir: 'vendor/jquery'
//});
//var semantiUiFiles = new Funnel('node_modules/semantic-ui/dist', {
//    exclude: [new RegExp(/components/)],
//    include: [
//        new RegExp(/\.min\.(js|css)$/),
//        new RegExp(/themes/)
//    ],
//    destDir: 'vendor/semantic-ui'
//});
//var fontAwesomeFiles = new Funnel('node_modules/font-awesome', {
//    include: [
//        new RegExp(/min\.css$/),
//        new RegExp(/fonts/)
//    ],
//    destDir: 'vendor/font-awesome'
//});

var bootstrapFiles = new Funnel('node_modules/bootstrap/dist', {
    include: [
        new RegExp(/css\/.+\.min\.css$/),
        new RegExp(/css\/.+\.map$/),
        new RegExp(/fonts/)
    ],
    destDir: 'vendor/bootstrap'
});
vendorFiles = mergeTrees([bootstrapFiles]);

var cssFiles = compileSass(['src'], 'styles/app.scss', 'styles/app.css');

var jsFiles = new Funnel('src', {
    exclude: [new RegExp(/__tests__/)],
    include: [new RegExp(/\.js$/)]
});
jsFiles = esTranspiler(jsFiles, {experimental: true});
jsFiles = browserify(jsFiles, {
    entries: ['./index'],
    outputFile: 'index.js'
});

var env = require('broccoli-env').getEnv();

if (env === 'production') {
    jsFiles = uglifyJavaScript(jsFiles);
    jsFiles = gzipFiles(jsFiles, {
        extensions: ['js', 'css'],
        keepUncompressed: true
    });
}

rimraf.sync('./dist');
module.exports = mergeTrees([staticFiles, vendorFiles, jsFiles, cssFiles], {overwrite: false});

