const React = require('react');
const _ = require('lodash');

// mounting a React component to a selector id location
export function mount(component, location, argv = {}) {
    if (!location) {
        location = document.body;
    } else {
        location = document.getElementById(location);
    }
    if (!React.isValidElement(component)) {
        component = React.createFactory(component);
    }
    React.render(component(argv), location);
};

// merging properties, used in React component for aggregating styles
export function m() {
    let res = {};
    _.each(arguments, (arg) => arg && _.merge(res, arg));
    return res;
};

