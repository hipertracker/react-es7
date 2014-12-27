Install

```
npm install
```

Usage:

```bash
npm run-script serve
```

Open `http://localhost:4200`

or

```
$ npm run-script bundle
$ http-server dist/
```
and open `http://localhost:8080`

Test:

```
$ npm test
```

Open: `http://localhost:8080`

* All JavaScript files are transpiled with 6to5 library with enabled experimental ES7 syntax (see: https://6to5.org/features.html).
* For using experimental ES7 code in `Jest` tests, the project is using my fork of `6to5-jest`package (https://github.com/hipertracker/6to5-jest)
* The workflow and communication between components is built using `Reflux` (https://github.com/spoike/refluxjs), a slighty modified (improved) Flux paradigm. See: http://blog.krawaller.se/posts/reflux-refinement/
* Unit testing is provided by (recomended by Facebook) `Jest` library (https://facebook.github.io/jest/)
* The example is using Bootstrap 3 React components thanks to `react-bootstrap` (http://react-bootstrap.github.io/).

Todo:

* Add  more unit tests showing `Jest` testing ES5/ES7 code.
* Add `Yeoman` project with options to choose SASS/Less/Stylus and Bootstrap/Semantic-UI

