
# react-es7


Example of [React](http://facebook.github.io/react/) + [Reflux](https://www.npmjs.com/package/reflux) + [routing](https://github.com/rackt/react-router) + [ES6 with experimental ES7 syntax](https://6to5.org/docs/usage/experimental/) + [Semantic-UI](http://semantic-ui.com/)

* All JavaScript files are transpiled with [6to5](https://6to5.org/) library with enabled [experimental ES7 syntax](https://6to5.org/features.html).
* For using experimental ES7 code in [Jest](http://facebook.github.io/jest/docs/tutorial-react.html) tests, the project is using [my fork](https://github.com/hipertracker/6to5-jest) of `6to5-jest` package.
* The workflow and communication between components is built using [Reflux](https://github.com/spoike/refluxjs), a slighty [improved](http://blog.krawaller.se/posts/reflux-refinement/) Flux paradigm.
* Unit testing is provided by [Jest](https://facebook.github.io/jest/).
* Using [Semantic-UI](http://semantic-ui.com/) framework with React components ([react-semantify](http://react-components.com/component/react-semantify)).

If for some reasons you can't or don' want to use Node for file processing, you can use pure AMD  version of that project: [hipertracker/react-es7-amd](https://github.com/hipertracker/react-es7-amd). It uses only a browser.

## Install

```
npm install -g broccoli-cli
npm install
bower install
```

## Usage

```
$ broccoli serve
```

Open `http://localhost:4200`

If you like to generate mangled, compressed, production build

```
$ BROCCOLI_ENV=production broccoli build dist
$ http-server dist/
```

and open `http://localhost:8080`

Test:

```
$ npm test
```

Currently just a simple example of using unit tests in React for files using ES6/ES7 syntax.

## Todo

* Add more [prop validation](http://facebook.github.io/react/docs/reusable-components.html) examples
* Add  more unit tests showing [Jest](http://facebook.github.io/jest/) testing ES5/ES7 code.
* Add [Yeoman](http://yeoman.io/) project with options to choose SASS/Less/Stylus and Bootstrap/Semantic-UI.
