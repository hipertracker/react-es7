let React = require('react');
let _ = require('lodash');

// mounting a React component to a selector id location
export function mount(component, location) {
    if (!location) {
        location = document.body;
    } else {
        location = document.getElementById(location);
    }
    React.render(React.createFactory(component)(), location);
};

// merging properties, used in React component for aggregating styles
export function m() {
    let res = {};
    _.each(arguments, (arg) => arg && _.merge(res, arg));
    return res;
};

