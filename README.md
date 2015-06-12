
# react-es7


Example of [React](http://facebook.github.io/react/) + [Flow](http://flowtype.org/) types + [Reflux](https://www.npmjs.com/package/reflux) + [routing](https://github.com/rackt/react-router) + [ES6 with experimental ES7 syntax](https://babeljs.io/docs/usage/experimental/) + [Semantic-UI](http://semantic-ui.com/)

* All JavaScript files are transpiled with [Babel](https://babeljs.io/) library with enabled [experimental ES7 syntax](http://babeljs.io/docs/usage/transformers/#es7-experimental-).
* The project support [Flow](http://flowtype.org/) type annotations
* For using experimental ES7 code in [Jest](http://facebook.github.io/jest/docs/tutorial-react.html) tests
* The workflow and communication between components is built using [Reflux](https://github.com/spoike/refluxjs), a slighty [improved](http://blog.krawaller.se/posts/reflux-refinement/) Flux paradigm.
* Unit testing is provided by [Jest](https://facebook.github.io/jest/).
* Using [Semantic-UI](http://semantic-ui.com/) framework with React components ([react-semantify](http://react-components.com/component/react-semantify)).

If for some reasons you can't or don' want to use Node for file processing, you can use [hipertracker/react-babel](https://github.com/hipertracker/react-babel). It uses only the browser but with AMD. All ES6 files are transpiled only once (during module loading), and cached.

## Install

```
npm install -g broccoli-cli
npm install
```

## Usage


* fast processing in memory:

```
broccoli serve
```
or

``` 
npm start
```

* with additional [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei):

```
broccoli serve --live-reload-port 35729
```

* with watcher and generating files:

```
broccoli-timepiece dist
http-server dist/ -p 4200
```

Open `http://localhost:4200`


* building files for production (minified, mangled and compressed):

```
BROCCOLI_ENV=production broccoli build dist
```

Test and code coverage:

```
$ npm test
```

Also code coverage in the browser:

```
npm run coverage
```

## Todo
* replace Reflux with [nuclear-js](https://github.com/optimizely/nuclear-js)
* Add examples of [Flow](http://flowtype.org/) types checking 
* Add more [prop validation](http://facebook.github.io/react/docs/reusable-components.html) examples
* Add  more unit tests showing [Jest](http://facebook.github.io/jest/) testing ES5/ES7 code with [Flow](http://flowtype.org/) types checking.
