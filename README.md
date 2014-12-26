Install

```
npm install
```

Usage:

```bash
npm run-script dev
```

Open `http://localhost:4200`

or

```
$ npm run-script pro
$ http-server dist/
```

Open: `http://localhost:8080`

* All JavaScript files are transpiled with 6to5 library with enabled experimental ES7 (see: https://6to5.org/features.html).

* For using experimental ES7 code in Jest tests, the project is using my fork of `6to5-jest`package (https://github.com/hipertracker/6to5-jest)

* The workflow and communication between components is built using Reflux (https://github.com/spoike/refluxjs), a slighty modified Flux paradigm.

* Unit testing is provided by (recomended by Facebook) `Jest` library (https://facebook.github.io/jest/)

* The example is using Bootstrap 3 React components thanks to `react-bootstrap` (http://react-bootstrap.github.io/).


Todo:

* Add `Semantic-UI` (http://semantic-ui.com/). There is promising `react-semantify` (http://react-components.com/component/react-semantify) but it is not as mature as `react-bootstrap` yet.
* Add `Yeoman` project with options to choose SASS/Less/Stylus and Bootstrap/Semantic-UI
* Add  more unit tests showing `Jest` testing ES5/ES7 code.

