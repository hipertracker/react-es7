var rimraf = require('rimraf'),
    mergeTrees = require('broccoli-merge-trees'),
    Funnel = require('broccoli-funnel'),
    compileSass = require('broccoli-sass'),
    babelTranspiler = require('broccoli-babel-transpiler'),
    fastBrowserify = require('broccoli-fast-browserify'),
    uglifyJavaScript = require('broccoli-uglify-js'),
    gzipFiles = require('broccoli-gzip'),
    env = require('broccoli-env').getEnv();

// copy index.html
var staticFiles = new Funnel('src', {
    files: ['index.html']
});

// convert SCSS into CSS
var cssFiles = compileSass(['src'], 'styles/app.scss', 'styles/app.css');

// exclude tests from build
var jsFiles = new Funnel('src', {
    exclude: [new RegExp(/__tests__/)],
    include: [new RegExp(/\.js$/)]
});

// transpile ES6/7 into ES5
jsFiles = babelTranspiler(jsFiles, {stage: 0});

// transpile for the browser
jsFiles = fastBrowserify(jsFiles, {
    bundles: {
        'index.js': {
            entryPoints: ['index.js']
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
module.exports = mergeTrees([staticFiles, cssFiles, jsFiles], {overwrite: true});

