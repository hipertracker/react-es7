var rimraf = require('rimraf'),
    mergeTrees = require('broccoli-merge-trees'),
    Funnel = require('broccoli-funnel'),
    compileSass = require('broccoli-sass'),
    //esTranspiler = require('broccoli-6to5-transpiler'),
    esTranspiler = require('broccoli-babel-transpiler'),
    fastBrowserify = require('broccoli-fast-browserify'),
    uglifyJavaScript = require('broccoli-uglify-js'),
    gzipFiles = require('broccoli-gzip'),
    env = require('broccoli-env').getEnv();

var staticFiles = new Funnel('src', {
    files: ['index.html']
});

// build vendor/*
var jqueryFiles = new Funnel('bower_components/jquery/dist', {
        include: [
            new RegExp(/\.min\.(js|map)$/),
        ],
        destDir: 'vendor/jquery'
    }),
    semanticUIFiles = new Funnel('bower_components/semantic-ui/dist', {
        include: [
            new RegExp(/\.min\.(js|css)$/),
            new RegExp(/themes/)
        ],
        destDir: 'vendor/semantic-ui'
    }),
    fontAwesomeFiles = new Funnel('bower_components/font-awesome', {
        include: [
            new RegExp(/min\.css$/),
            new RegExp(/fonts/)
        ],
        destDir: 'vendor/font-awesome'
    });
var vendorFiles = mergeTrees([jqueryFiles, semanticUIFiles, fontAwesomeFiles]);

var cssFiles = compileSass(['src'], 'styles/app.scss', 'styles/app.css');

var jsFiles = new Funnel('src', {
    exclude: [new RegExp(/__tests__/)],
    include: [new RegExp(/\.js$/)]
});

jsFiles = esTranspiler(jsFiles, {experimental: true});

jsFiles = fastBrowserify(jsFiles, {
    bundles: {
        'index.js': {
            entryPoints: ['**/index.js']
        }
    }
});

if (env === 'production') {
    jsFiles = uglifyJavaScript(jsFiles);
    jsFiles = gzipFiles(jsFiles, {
        extensions: ['js', 'css'],
        keepUncompressed: true
    });
}

rimraf.sync('./dist');
module.exports = mergeTrees([staticFiles, vendorFiles, jsFiles, cssFiles], {overwrite: false});

