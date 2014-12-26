let React = require('react');
let _ = require('lodash');

// mounting a React component to a selector id location
export function mount(component, location, argv = {}) {
    if (!location) {
        location = document.body;
    } else {
        location = document.getElementById(location);
    }
    console.log('@argv', argv);
    console.log('@1', component);
    if (!React.isValidElement(component)) {
        console.log('@2', component);
        component = React.createFactory(component);
        console.log('@3', component);
    }
    React.render(component(argv), location);
};

// merging properties, used in React component for aggregating styles
export function m() {
    let res = {};
    _.each(arguments, (arg) => arg && _.merge(res, arg));
    return res;
};

